#!/bin/zsh
# usage: tools/shoot.sh NAME URL WIDTH HEIGHT  -> shots/NAME.png (headless Chrome; min window width is ~500px,
# so capture phone widths through tools/frame.html, which embeds the page in a 375px iframe)
OUT="${SHOTS:-$(dirname "$0")/../shots}"
mkdir -p "$OUT"
PROFILE="$(mktemp -d)"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --user-data-dir="$PROFILE" --force-device-scale-factor=1 --window-size="$3,$4" \
  --virtual-time-budget=4000 --screenshot="$OUT/$1.png" "$2" >/dev/null 2>&1
rm -rf "$PROFILE"
echo "$OUT/$1.png"
