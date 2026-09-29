# Wordmarks

The nameplate for two of the three editions is an image rather than live type, because
the nameplate designs are custom lettering — no standard webfont gets close enough at that size.
The City keeps a typeset nameplate in plain serif capitals.

| File | Edition | Made from | Licence |
|---|---|---|---|
| `fbi-watchlist.png` | FBI Watchlist | "Admetia" set in Gloock, white, slightly emboldened, tracking tightened | `OFL-gloock.txt` |
| `wall-street.png` | Wall Street | "ADMETIA." set in Roboto Serif, ultra-condensed, weight 470, compressed to 72% | `OFL-roboto-serif.txt` |

Both typefaces were chosen from free open-source candidates to deliver crisp editorial nameplates.
The PNGs are transparent, cropped to the ink, and stored at about twice their largest
display width. `tools/build-brand.py` draws them from the fonts' own outlines, along with
the favicon, the touch icon and the link-preview card. The SIL Open Font License places no restriction on images made with a font; the
licence files are here only to credit the typefaces.

The text "Admetia" stays in the page's markup, so screen readers read it and
print — where background images are dropped — falls back to it.
