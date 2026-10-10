"""Brand assets for Admetia: favicon, touch icon, link card.

Outlines come straight from the typefaces (shaped with HarfBuzz, so kerning is
the font's own); PNGs are rendered by headless Chrome from the vector sources.
Re-run after changing the name.

    python3 -m venv .venv && .venv/bin/pip install fonttools brotli uharfbuzz
    .venv/bin/python tools/build-brand.py

Needs Google Chrome. The source fonts (all OFL) are downloaded from the Google
Fonts repository into tools/.brand-cache/, which git ignores.
"""
import base64, os, shutil, subprocess, sys, urllib.request
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(REPO, 'tools', '.brand-cache')
OUT = os.path.join(CACHE, 'out')
os.makedirs(OUT, exist_ok=True)
SOURCES = {
    'SourceSerif4.ttf': 'ofl/sourceserif4/SourceSerif4%5Bopsz,wght%5D.ttf',
}
for name, path in SOURCES.items():
    if not os.path.exists(os.path.join(CACHE, name)):
        urllib.request.urlretrieve('https://github.com/google/fonts/raw/main/' + path, os.path.join(CACHE, name))
F = lambda n: os.path.join(CACHE, n)
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'


def outline(font_path, text, size, loc=None, tracking=0.0, scale_x=1.0):
    """Path data (y down, baseline at 0) and ink bounds for text at `size` px."""
    blob = hb.Blob.from_file_path(font_path)
    face = hb.Face(blob)
    font = hb.Font(face)
    if loc:
        font.set_variations(loc)
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(font, buf, {'kern': True, 'liga': True})
    tt = TTFont(font_path)
    gs = tt.getGlyphSet(location=loc) if loc else tt.getGlyphSet()
    order = tt.getGlyphOrder()
    upm = tt['head'].unitsPerEm
    k = size / upm
    spen = SVGPathPen(gs)
    bpen = BoundsPen(gs)
    x = 0
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        g = gs[order[info.codepoint]]
        t = (k * scale_x, 0, 0, -k, (x + pos.x_offset) * k * scale_x, -pos.y_offset * k)
        g.draw(TransformPen(spen, t))
        g.draw(TransformPen(bpen, t))
        x += pos.x_advance + tracking * upm
    return spen.getCommands(), bpen.bounds



def shoot(html_name, w, h, png_name, transparent=False):
    args = [CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
            f'--window-size={w},{h}', '--virtual-time-budget=4000', f'--screenshot={os.path.join(OUT, png_name)}']
    if transparent:
        args.append('--default-background-color=00000000')
    args.append('file://' + os.path.join(OUT, html_name))
    subprocess.run(args, check=True, capture_output=True)


def page_for_svg(svg_name, w, h):
    html = (f'<!doctype html><html><head><style>html,body{{margin:0;background:transparent}}'
            f'img{{display:block;width:{w}px;height:{h}px}}</style></head><body><img src="{svg_name}"></body></html>')
    name = svg_name.replace('.svg', '.html')
    open(os.path.join(OUT, name), 'w').write(html)
    return name


# ---------------------------------------------------------------- favicon
# A capital A in Source Serif 4 on claret: the letter is itself a way in.
d, (x0, y0, x1, y1) = outline(F('SourceSerif4.ttf'), 'A', 54, loc={'wght': 700, 'opsz': 60})
dx, dy = 32 - (x0 + x1) / 2, 32 - (y0 + y1) / 2 + .5
fav = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
       '<rect width="64" height="64" fill="#990f3d"/>'
       f'<path transform="translate({dx:.2f} {dy:.2f})" fill="#fff1e5" d="{d}"/></svg>')
open(os.path.join(OUT, 'favicon.svg'), 'w').write(fav)
shoot(page_for_svg('favicon.svg', 180, 180), 180, 180, 'apple-touch-icon.png')

# ---------------------------------------------------------------- link card
def data(path, mime):
    return f'data:{mime};base64,' + base64.b64encode(open(path, 'rb').read()).decode()

serif = data(os.path.join(REPO, 'fonts/source-serif-4-roman.woff2'), 'font/woff2')
hanken = data(os.path.join(REPO, 'fonts/hanken-grotesk.woff2'), 'font/woff2')
photo = data(os.path.join(REPO, 'img/photo/hero.jpg'), 'image/jpeg')
card = f'''<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{{font-family:S;font-weight:200 900;src:url({serif}) format("woff2")}}
@font-face{{font-family:H;font-weight:100 900;src:url({hanken}) format("woff2")}}
html,body{{margin:0;width:1200px;height:630px;overflow:hidden}}
body{{background:#fff1e5;color:#33302e;position:relative}}
.top{{position:absolute;left:0;right:0;top:0;height:18px;background:#262a33}}
.photo{{position:absolute;right:0;top:18px;bottom:0;width:465px;background:url({photo}) center/cover;border-left:5px solid #990f3d}}
.col{{position:absolute;left:64px;top:62px;width:600px}}
.np{{font:600 104px/1 S;letter-spacing:.02em;text-transform:uppercase}}
.dbl{{height:6px;border-top:3px solid #33302e;border-bottom:1px solid #33302e;margin:22px 0 26px;opacity:.85}}
.kick{{font:700 20px/1 H;color:#990f3d}}
.hl{{font:400 64px/1.05 S;margin:18px 0 20px;letter-spacing:-.01em}}
.hl b{{font-weight:700}}
.sub{{font:400 24px/1.45 H;color:#4d4845}}
.tags{{position:absolute;left:64px;bottom:52px;display:flex;gap:12px}}
.tags span{{font:600 19px/1 H;padding:12px 16px;border:1px solid #c9bcb0;background:#fff7ef}}
.tags span:first-child{{background:#33302e;color:#fff1e5;border-color:#33302e}}
</style></head><body><div class="top"></div><div class="photo"></div>
<div class="col"><div class="np">Admetia</div><div class="dbl"></div>
<div class="kick">MBA · Business master’s · Computing master’s</div>
<div class="hl">The way <b>in</b>.</div>
<div class="sub">Where do you actually stand? Your verdict at over<br>100 programmes across Europe and North America.</div></div>
<div class="tags"><span>Free</span><span>Private</span><span>English · Italiano</span></div>
</body></html>'''
open(os.path.join(OUT, 'og-card.html'), 'w').write(card)
shoot('og-card.html', 1200, 630, 'og-card.png')
subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '86', os.path.join(OUT, 'og-card.png'),
                '--out', os.path.join(OUT, 'og-card.jpg')], check=True, capture_output=True)
for f, dest in (('favicon.svg', 'img'), ('apple-touch-icon.png', 'img'), ('og-card.jpg', 'img/og-admetia.jpg')):
    shutil.copy(os.path.join(OUT, f), os.path.join(REPO, dest) if dest.endswith('.jpg') else os.path.join(REPO, dest, f))
print('Written to img/.')
