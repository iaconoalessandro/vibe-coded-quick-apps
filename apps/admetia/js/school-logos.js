/* Local school marks shared by the directory and the business results.
 * The programme-to-institution map is explicit: a business school and its
 * parent university can have different marks. Sources: img/schools/sources.json.
 * These images identify existing names; they never affect scoring or filters.
 */
window.SchoolLogos = (function () {
  'use strict';

  var institutions = {
  "hec": {
    "name": "HEC Paris",
    "src": "img/schools/hec.png"
  },
  "insead": {
    "name": "INSEAD",
    "src": "img/schools/insead-provided.png",
    "crop": [
      63,
      31,
      474,
      167
    ],
    "background": "#086b4f",
    "inset": 0
  },
  "lbs": {
    "name": "London Business School",
    "src": "img/schools/lbs.png",
    "background": "#262c4e"
  },
  "lse": {
    "name": "London School of Economics",
    "src": "img/schools/lse.png",
    "crop": [
      0,
      0,
      98,
      98
    ],
    "background": "#e0112b",
    "inset": 0
  },
  "essec": {
    "name": "ESSEC",
    "src": "img/schools/essec.png",
    "crop": [
      87,
      0,
      54,
      80
    ]
  },
  "escp": {
    "name": "ESCP Business School",
    "src": "img/schools/escp.png"
  },
  "bocconi": {
    "name": "Bocconi University",
    "src": "img/schools/bocconi.png"
  },
  "sda-bocconi": {
    "name": "SDA Bocconi",
    "src": "img/schools/sda-bocconi.png"
  },
  "rsm": {
    "name": "Rotterdam School of Management",
    "src": "img/schools/rsm-provided.png",
    "crop": [
      12,
      67,
      176,
      66
    ],
    "background": "#181d55",
    "inset": 0
  },
  "imperial": {
    "name": "Imperial College London",
    "src": "img/schools/imperial.png",
    "background": "#0000cd",
    "inset": 0
  },
  "warwick-business": {
    "name": "Warwick Business School",
    "src": "img/schools/warwick-business.png",
    "background": "#0054a4",
    "inset": 0,
    "crop": [
      0,
      0,
      176,
      176
    ]
  },
  "warwick": {
    "name": "University of Warwick",
    "src": "img/schools/warwick.png"
  },
  "manchester-business": {
    "name": "Alliance Manchester Business School",
    "src": "img/schools/manchester-provided.png",
    "crop": [
      25,
      35,
      503,
      115
    ],
    "background": "#50007f",
    "inset": 0
  },
  "manchester": {
    "name": "University of Manchester",
    "src": "img/schools/manchester-provided.png",
    "crop": [
      25,
      35,
      503,
      115
    ],
    "background": "#50007f",
    "inset": 0
  },
  "wu": {
    "name": "WU Vienna",
    "src": "img/schools/wu.png"
  },
  "cbs": {
    "name": "Copenhagen Business School",
    "src": "img/schools/cbs.png",
    "crop": [
      0,
      0,
      64,
      64
    ],
    "background": "#003d87",
    "cropBackground": "#fff",
    "inset": 0
  },
  "nova": {
    "name": "Nova School of Business and Economics",
    "src": "img/schools/nova.png"
  },
  "ie": {
    "name": "IE Business School",
    "src": "img/schools/ie.png"
  },
  "iese": {
    "name": "IESE Business School",
    "src": "img/schools/iese.png",
    "crop": [
      0,
      0,
      73,
      87
    ]
  },
  "stgallen": {
    "name": "University of St. Gallen",
    "src": "img/schools/stgallen.png",
    "crop": [
      18,
      12,
      145,
      159
    ],
    "inset": 1
  },
  "duke": {
    "name": "Duke Fuqua",
    "src": "img/schools/duke.png",
    "background": "#14377d",
    "crop": [
      30,
      37,
      150,
      135
    ],
    "inset": 0
  },
  "ross": {
    "name": "Michigan Ross",
    "src": "img/schools/ross.svg",
    "background": "#00274c",
    "crop": [
      0,
      0,
      77,
      56.8
    ]
  },
  "edhec": {
    "name": "EDHEC",
    "src": "img/schools/edhec.png",
    "crop": [
      0,
      0,
      59,
      58
    ]
  },
  "emlyon": {
    "name": "emlyon business school",
    "src": "img/schools/emlyon-provided.png",
    "background": "#e2001a",
    "inset": 0,
    "crop": [
      48,
      176,
      422,
      340
    ]
  },
  "skema": {
    "name": "SKEMA Business School",
    "src": "img/schools/skema.png"
  },
  "esade": {
    "name": "Esade",
    "src": "img/schools/esade.png",
    "crop": [
      39,
      59,
      172,
      53
    ]
  },
  "mannheim": {
    "name": "Mannheim Business School",
    "src": "img/schools/mannheim.png",
    "crop": [
      0,
      0,
      120,
      130
    ]
  },
  "tum": {
    "name": "Technical University of Munich",
    "src": "img/schools/tum.png",
    "crop": [
      5,
      44,
      170,
      92
    ],
    "inset": 3
  },
  "oxford-business": {
    "name": "Oxford Said Business School",
    "src": "img/schools/oxford-business.png"
  },
  "sse": {
    "name": "Stockholm School of Economics",
    "src": "img/schools/sse.png",
    "crop": [
      0,
      0,
      54,
      57
    ]
  },
  "mit": {
    "name": "MIT Sloan",
    "src": "img/schools/mit.png"
  },
  "princeton": {
    "name": "Princeton University",
    "src": "img/schools/princeton.png",
    "crop": [
      5,
      0,
      38,
      48
    ],
    "inset": 4
  },
  "berkeley-business": {
    "name": "Berkeley Haas",
    "src": "img/schools/berkeley-haas-provided.png",
    "crop": [
      73,
      307,
      847,
      427
    ],
    "background": "#14284b",
    "inset": 0
  },
  "washu": {
    "name": "Washington University Olin",
    "src": "img/schools/washu.png"
  },
  "vanderbilt": {
    "name": "Vanderbilt Owen",
    "src": "img/schools/vanderbilt.png",
    "background": "#252525"
  },
  "yale": {
    "name": "Yale School of Management",
    "src": "img/schools/yale.png"
  },
  "oxford": {
    "name": "University of Oxford",
    "src": "img/schools/oxford.png"
  },
  "cambridge": {
    "name": "University of Cambridge",
    "src": "img/schools/cambridge.png",
    "crop": [
      0,
      0,
      51,
      60
    ]
  },
  "ucl": {
    "name": "University College London",
    "src": "img/schools/ucl.png",
    "background": "#983bfe",
    "inset": 0
  },
  "edinburgh": {
    "name": "University of Edinburgh",
    "src": "img/schools/edinburgh.png",
    "crop": [
      0,
      0,
      70,
      69
    ]
  },
  "kcl": {
    "name": "King's College London",
    "src": "img/schools/kcl.png",
    "background": "#e1221a",
    "inset": 0
  },
  "southampton": {
    "name": "University of Southampton",
    "src": "img/schools/southampton.png"
  },
  "eth": {
    "name": "ETH Zurich",
    "src": "img/schools/eth.png",
    "crop": [
      28,
      67,
      136,
      58
    ],
    "inset": 2
  },
  "epfl": {
    "name": "EPFL",
    "src": "img/schools/epfl.png"
  },
  "tudelft": {
    "name": "TU Delft",
    "src": "img/schools/tudelft.png"
  },
  "kth": {
    "name": "KTH Royal Institute of Technology",
    "src": "img/schools/kth.png",
    "background": "#2258a5",
    "inset": 0
  },
  "uva": {
    "name": "University of Amsterdam",
    "src": "img/schools/uva.png",
    "background": "#020202",
    "inset": 0,
    "crop": [
      2,
      2,
      176,
      176
    ]
  },
  "stanford": {
    "name": "Stanford University",
    "src": "img/schools/stanford-provided.png",
    "crop": [
      100,
      52,
      208,
      304
    ],
    "background": "#ffffff",
    "inset": 2
  },
  "cmu": {
    "name": "Carnegie Mellon University",
    "src": "img/schools/cmu.png",
    "background": "#9f0000",
    "inset": 0
  },
  "berkeley": {
    "name": "University of California Berkeley",
    "src": "img/schools/berkeley.png"
  },
  "bristol": {
    "name": "University of Bristol",
    "src": "img/schools/bristol.png",
    "crop": [
      0,
      0,
      83,
      83
    ]
  },
  "glasgow": {
    "name": "University of Glasgow",
    "src": "img/schools/glasgow.png",
    "background": "#00355f",
    "inset": 0
  },
  "standrews": {
    "name": "University of St Andrews",
    "src": "img/schools/standrews.png",
    "background": "#00539b",
    "inset": 0
  },
  "columbia": {
    "name": "Columbia Business School",
    "src": "img/schools/columbia.png"
  },
  "harvard": {
    "name": "Harvard Business School",
    "src": "img/schools/harvard.png"
  },
  "imd": {
    "name": "IMD",
    "src": "img/schools/imd.png",
    "crop": [
      21,
      69,
      166,
      70
    ],
    "inset": 2
  },
  "nyu": {
    "name": "NYU Stern",
    "src": "img/schools/nyu.png",
    "background": "#572c86",
    "inset": 0
  },
  "stanford-business": {
    "name": "Stanford Graduate School of Business",
    "src": "img/schools/stanford-provided.png",
    "crop": [
      100,
      52,
      208,
      304
    ],
    "background": "#ffffff",
    "inset": 2
  },
  "wharton": {
    "name": "Wharton",
    "src": "img/schools/wharton.png",
    "crop": [
      0,
      0,
      59,
      67
    ]
  },
  "booth": {
    "name": "Chicago Booth",
    "src": "img/schools/booth.png"
  },
  "kellogg": {
    "name": "Northwestern Kellogg",
    "src": "img/schools/kellogg.png",
    "crop": [
      37,
      27,
      214,
      117
    ],
    "inset": 2
  },
  "tuck": {
    "name": "Dartmouth Tuck",
    "src": "img/schools/tuck.png"
  },
  "cambridge-business": {
    "name": "Cambridge Judge",
    "src": "img/schools/cambridge-business.png",
    "crop": [
      20,
      14,
      38,
      44
    ]
  },
  "ucla": {
    "name": "UCLA Anderson",
    "src": "img/schools/ucla.png"
  },
  "darden": {
    "name": "Virginia Darden",
    "src": "img/schools/darden.svg",
    "crop": [
      0,
      17,
      30,
      32
    ]
  },
  "cornell": {
    "name": "Cornell Johnson",
    "src": "img/schools/cornell.png"
  },
  "tepper": {
    "name": "Carnegie Mellon Tepper",
    "src": "img/schools/tepper.png",
    "background": "#9f0000",
    "inset": 0
  },
  "rotman": {
    "name": "Toronto Rotman",
    "src": "img/schools/rotman.png"
  },
  "unc": {
    "name": "UNC Kenan-Flagler",
    "src": "img/schools/unc.png",
    "background": "#4b9cd3",
    "inset": 0
  },
  "usc": {
    "name": "USC Marshall",
    "src": "img/schools/usc.png",
    "crop": [
      75,
      109,
      30,
      38
    ]
  },
  "mccombs": {
    "name": "UT Austin McCombs",
    "src": "img/schools/mccombs.png",
    "crop": [
      0,
      0,
      31,
      36
    ]
  },
  "emory": {
    "name": "Emory Goizueta",
    "src": "img/schools/emory.png"
  },
  "georgetown": {
    "name": "Georgetown McDonough",
    "src": "img/schools/georgetown.png",
    "background": "#011e41",
    "inset": 0
  },
  "ivey": {
    "name": "Ivey Business School",
    "src": "img/schools/ivey.png",
    "crop": [
      0,
      0,
      55,
      75
    ]
  },
  "mcgill": {
    "name": "McGill Desautels",
    "src": "img/schools/mcgill.png",
    "crop": [
      0,
      0,
      31,
      44
    ]
  },
  "schulich": {
    "name": "York Schulich",
    "src": "img/schools/schulich.png",
    "crop": [
      0,
      0,
      41,
      48
    ]
  },
  "babson": {
    "name": "Babson College",
    "src": "img/schools/babson.png",
    "background": "#006342",
    "inset": 0
  },
  "ceibs": {
    "name": "China Europe International Business School",
    "src": "img/schools/ceibs.png",
    "crop": [
      0,
      0,
      73,
      67
    ]
  },
  "peking": {
    "name": "Peking University Guanghua",
    "src": "img/schools/peking.png"
  },
  "ntu": {
    "name": "Nanyang Business School",
    "src": "img/schools/ntu.png",
    "crop": [
      0,
      0,
      81,
      103
    ]
  },
  "fudan": {
    "name": "Fudan University School of Management",
    "src": "img/schools/fudan.png"
  }
};
  var programmes = {
  "hec-mim": "hec",
  "insead-mim": "insead",
  "lbs-mim": "lbs",
  "lse-mim": "lse",
  "essec-mim": "essec",
  "escp-mim": "escp",
  "bocconi-mgmt": "bocconi",
  "bocconi-im": "bocconi",
  "rsm-mim": "rsm",
  "imperial-mgmt": "imperial",
  "warwick-mgmt": "warwick-business",
  "manchester-mgmt": "manchester-business",
  "wu-simc": "wu",
  "cbs-mgmt": "cbs",
  "nova-imm": "nova",
  "ie-mim": "ie",
  "iese-mim": "iese",
  "stgallen-sim": "stgallen",
  "duke-mms": "duke",
  "ross-mm": "ross",
  "edhec-mim": "edhec",
  "emlyon-mim": "emlyon",
  "skema-mim": "skema",
  "esade-mim": "esade",
  "mannheim-mmm": "mannheim",
  "tum-mim": "tum",
  "lbs-mfa": "lbs",
  "oxford-mfe": "oxford-business",
  "imperial-fin": "imperial",
  "lse-fin": "lse",
  "sse-fin": "sse",
  "bocconi-fin": "bocconi",
  "hec-mif": "hec",
  "esade-fin": "esade",
  "nova-imf": "nova",
  "warwick-fin": "warwick-business",
  "manchester-fin": "manchester-business",
  "mit-mfin": "mit",
  "princeton-mfin": "princeton",
  "berkeley-mfe": "berkeley-business",
  "washu-msf": "washu",
  "vanderbilt-msf": "vanderbilt",
  "essec-mif": "essec",
  "escp-mif": "escp",
  "cbs-fin": "cbs",
  "stgallen-mbf": "stgallen",
  "yale-mam": "yale",
  "rsm-fi": "rsm",
  "wu-qfin": "wu",
  "mannheim-mmfact": "mannheim",
  "tum-fim": "tum",
  "bocconi-mkt": "bocconi",
  "esade-mkt": "esade",
  "imperial-mkt": "imperial",
  "warwick-mkt": "warwick-business",
  "manchester-mkt": "manchester-business",
  "rsm-mkt": "rsm",
  "essec-mkt": "essec",
  "hec-mkt": "hec",
  "essec-mmd": "essec",
  "escp-mkt": "escp",
  "ie-mdm": "ie",
  "lse-mkt": "lse",
  "emlyon-mkt": "emlyon",
  "edhec-mkt": "edhec",
  "stgallen-mimm": "stgallen",
  "cbs-sam": "cbs",
  "oxford-acs": "oxford",
  "cambridge-acs": "cambridge",
  "imperial-advcomp": "imperial",
  "imperial-aiml": "imperial",
  "ucl-dsml": "ucl",
  "edinburgh-ai": "edinburgh",
  "edinburgh-informatics": "edinburgh",
  "kcl-ai": "kcl",
  "warwick-cs": "warwick",
  "manchester-acs": "manchester",
  "southampton-ai": "southampton",
  "eth-cs": "eth",
  "epfl-cs": "epfl",
  "tudelft-cs": "tudelft",
  "tum-informatics": "tum",
  "kth-ml": "kth",
  "uva-ai": "uva",
  "stanford-mscs": "stanford",
  "cmu-mscs": "cmu",
  "cmu-msml": "cmu",
  "berkeley-meng": "berkeley",
  "imperial-computing": "imperial",
  "ucl-cs-conv": "ucl",
  "bristol-cs-conv": "bristol",
  "glasgow-it": "glasgow",
  "standrews-cs-conv": "standrews",
  "mba:Columbia": "columbia",
  "mba:Harvard": "harvard",
  "mba:IMD": "imd",
  "mba:MIT Sloan": "mit",
  "mba:NYU Stern": "nyu",
  "mba:Stanford GSB": "stanford-business",
  "mba:Wharton": "wharton",
  "mba:Yale SOM": "yale",
  "mba:Chicago Booth": "booth",
  "mba:Kellogg": "kellogg",
  "mba:INSEAD": "insead",
  "mba:Berkeley Haas": "berkeley-business",
  "mba:Tuck": "tuck",
  "mba:London Business School": "lbs",
  "mba:Michigan Ross": "ross",
  "mba:Duke Fuqua": "duke",
  "mba:Cambridge Judge": "cambridge-business",
  "mba:Oxford Saïd": "oxford-business",
  "mba:UCLA Anderson": "ucla",
  "mba:Darden": "darden",
  "mba:Cornell Johnson": "cornell",
  "mba:Carnegie Mellon Tepper": "tepper",
  "mba:IESE": "iese",
  "mba:Toronto Rotman": "rotman",
  "mba:UNC Kenan-Flagler": "unc",
  "mba:USC Marshall": "usc",
  "mba:UT Austin McCombs": "mccombs",
  "mba:Emory Goizueta": "emory",
  "mba:Georgetown McDonough": "georgetown",
  "mba:HEC Paris": "hec",
  "mba:ESADE": "esade",
  "mba:IE Business School": "ie",
  "mba:Ivey": "ivey",
  "mba:McGill Desautels": "mcgill",
  "mba:Schulich": "schulich",
  "mba:Babson": "babson",
  "mba:SDA Bocconi": "sda-bocconi",
  "mba:WashU Olin": "washu",
  "mba:CEIBS": "ceibs",
  "mba:Peking Guanghua": "peking",
  "mba:Nanyang (NTU)": "ntu",
  "mba:Fudan": "fudan",
  "mba:Mannheim Business School": "mannheim",
  "excluded:Cambridge Judge — Master of Finance": "cambridge-business"
};

  function heading(key, name) {
    var heading = document.createElement('span');
    heading.className = 'school-heading';
    var school = institutions[programmes[key]];
    if (school) {
      var frame = document.createElement('span');
      frame.className = 'school-logo-frame';
      frame.setAttribute('aria-hidden', 'true');
      if (school.background) frame.style.backgroundColor = school.background;
      if (school.inset !== undefined) frame.style.setProperty('--logo-inset', school.inset + 'px');
      var image = document.createElement('img');
      image.className = 'school-logo';
      /* The adjacent name supplies the accessible label without repetition. */
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      image.width = 72;
      image.height = 52;
      image.loading = 'lazy';
      image.decoding = 'async';
      if (school.crop) {
        /* A viewport isolates the complete symbol from its accompanying
         * wordmark. Keep the source file intact and preserve its proportions. */
        var crop = school.crop;
        var viewport = document.createElement('span');
        viewport.className = 'school-logo-crop';
        if (school.cropBackground) viewport.style.backgroundColor = school.cropBackground;
        viewport.style.setProperty('--logo-ratio', crop[2] / crop[3]);
        viewport.style.aspectRatio = crop[2] + ' / ' + crop[3];
        image.addEventListener('load', function () {
          image.style.width = (image.naturalWidth / crop[2] * 100) + '%';
          image.style.height = (image.naturalHeight / crop[3] * 100) + '%';
          image.style.left = (-crop[0] / crop[2] * 100) + '%';
          image.style.top = (-crop[1] / crop[3] * 100) + '%';
        });
        viewport.appendChild(image);
        frame.appendChild(viewport);
      } else {
        frame.appendChild(image);
      }
      image.addEventListener('error', function () { frame.remove(); });
      image.src = school.src;
      heading.appendChild(frame);
    }
    var text = document.createElement('span');
    text.className = 'school-title';
    text.textContent = name;
    heading.appendChild(text);
    return heading;
  }

  return { heading: heading, institutions: institutions, programmes: programmes };
}());
