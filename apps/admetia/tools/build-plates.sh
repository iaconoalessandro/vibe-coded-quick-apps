#!/bin/sh
# Builds the WebP copies of the illustrations the pages serve, from the PNG
# masters. The masters (about 3 MB each) are not kept in the repository.
# Needs ffmpeg and cwebp (brew install ffmpeg webp).
#
#   tools/build-plates.sh [folder of masters, default ~/Pictures]
#
#   field-<field>.png, role-<scene>.png, photo-<country>-<city>.png
#     →  img/plates/<name>-400.webp, <name>-800.webp
#
# No illustration is drawn wider than about 400 CSS px, so 800 covers a 2x
# screen. The masters are drawn on a cream a few levels off the page's paper
# (about 254,239,225 against #fff1e5); the channel gains below bring it onto
# the paper so no rectangle shows around a drawing.

set -e
src="${1:-$HOME/Pictures}"
cd "$(dirname "$0")/.."
mkdir -p img/plates
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

for png in "$src"/field-*.png "$src"/role-*.png "$src"/photo-*.png; do
  [ -f "$png" ] || continue
  name=$(basename "$png" .png)
  for w in 400 800; do
    ffmpeg -loglevel error -y -i "$png" \
      -vf "lutrgb=r='min(255,val*255/254)':g='min(255,val*241/239)':b='min(255,val*229/225)',scale=$w:-2:flags=lanczos" \
      "$tmp/$name-$w.png"
    cwebp -quiet -q 72 -m 6 "$tmp/$name-$w.png" -o "img/plates/$name-$w.webp"
  done
done
