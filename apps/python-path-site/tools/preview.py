# usage: python tools/preview.py dist/artifact.html OUT.html  -> wraps the page in a document skeleton; with ?demo=YYYY-MM-DD it fakes
# date and loads example progress (preview only; never published)
import sys
from pathlib import Path
built, out = map(Path, sys.argv[1:])
skeleton = ('<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">'
            '<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
            'html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}'
            'img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>')
demo = """<script>(function(){var q=new URLSearchParams(location.search),d=q.get('demo');if(!d)return;
var fixed=new Date(d+'T10:00:00').getTime(),R=Date;function F(){return arguments.length?new (Function.prototype.bind.apply(R,[null].concat([].slice.call(arguments))))():new R(fixed);}
F.now=function(){return fixed};F.prototype=R.prototype;F.parse=R.parse;F.UTC=R.UTC;window.Date=F;
var done={};['w0-vscode','w0-venv','w0-red','w0-hello','w0-python_version','w0-in_virtualenv','w0-average_of_positive','w0-git','w0-quiz'].forEach(function(k){done[k]=true});
['read','celsius_to_fahrenheit','is_even','grade','sum_to','count_vowels','fizzbuzz','reverse_words','format_price','initials','is_palindrome','collatz_steps','first_index_above','safe_int','count_digits','multiplication_table','book','quiz','push'].forEach(function(k){done['w1-'+k]=true});
['read','second_largest','unique_in_order','append_copy','min_max','transpose','squares_of_odds','word_frequencies','top_n'].forEach(function(k){done['w2-'+k]=true});
if(q.get('fresh'))done={};
// one right and one wrong quiz answer so explanations show; ?q= types a cheat-sheet search after load
localStorage.setItem('python-path-progress',JSON.stringify({done:done,quiz:{'w2-q0':1,'w2-q1':0}}));
if(q.get('q'))addEventListener('load',function(){setTimeout(function(){var i=document.getElementById('cs-q');if(i){i.value=q.get('q');i.dispatchEvent(new Event('input',{bubbles:true}));}},300)});
if(q.get('look'))localStorage.setItem('python-path-look',q.get('look'));if(q.get('theme'))document.documentElement.dataset.theme=q.get('theme');})();</script>"""
out.write_text(skeleton + demo + built.read_text(encoding="utf-8") + "</body></html>", encoding="utf-8")
print("preview", out)
