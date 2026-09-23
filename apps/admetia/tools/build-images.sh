#!/bin/sh
# Builds the responsive WebP variants the pages serve, from the JPEG masters
# in img/photo/. Needs cwebp (brew install webp). Re-run after replacing a
# photo.
#
#   img/photo/<name>.jpg  →  <name>-480.webp, <name>-800.webp, <name>-1240.webp
#
# No photo is ever drawn wider than ~620 CSS px, so 1240 covers a 2x screen;
# 480 and 800 serve phones and 1x desktops. Every photo gets all three names
# so the markup can follow one pattern; a master narrower than a size is
# encoded at its own width instead of being upscaled.
#
# Also writes lossless WebP copies of the edition wordmarks.

set -e
cd "$(dirname "$0")/.."

for jpg in img/photo/*.jpg; do
  name="${jpg%.jpg}"
  width=$(sips -g pixelWidth "$jpg" | awk '/pixelWidth/ { print $2 }')
  for w in 480 800 1240; do
    [ "$width" -lt "$w" ] && size="$width" || size="$w"
    cwebp -quiet -q 80 -m 6 -resize "$size" 0 "$jpg" -o "$name-$w.webp"
  done
done

for png in img/wordmark/*.png; do
  cwebp -quiet -lossless -z 9 "$png" -o "${png%.png}.webp"
done
