# Getting Codepages

The fields of the pages.csv manifest are `codepage,url,bytes` (SBCS=1, DBCS=2)

```>pages.csv
37,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/EBCDIC/CP037.TXT,1
437,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP437.TXT,1
500,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/EBCDIC/CP500.TXT,1
737,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP737.TXT,1
775,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP775.TXT,1
850,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP850.TXT,1
852,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP852.TXT,1
855,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP855.TXT,1
857,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP857.TXT,1
860,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP860.TXT,1
861,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP861.TXT,1
862,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP862.TXT,1
863,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP863.TXT,1
864,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP864.TXT,1
865,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP865.TXT,1
866,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP866.TXT,1
869,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/CP869.TXT,1
874,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP874.TXT,1
875,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/EBCDIC/CP875.TXT,1
932,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP932.TXT,2
936,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP936.TXT,2
949,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP949.TXT,2
950,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT,2
1026,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/EBCDIC/CP1026.TXT,1
1250,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1250.TXT,1
1251,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1251.TXT,1
1252,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1252.TXT,1
1253,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1253.TXT,1
1254,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1254.TXT,1
1255,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1255.TXT,1
1256,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1256.TXT,1
1257,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1257.TXT,1
1258,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP1258.TXT,1
```

Note that the Windows rendering is used for the Mac code pages.  The primary
difference is the use of the private `0xF8FF` code (which renders as an Apple
logo on macs but as garbage on other operating systems).  It may be desirable
to fall back to the behavior, in which case the files are under APPLE and not
MICSFT.  Codepages are an absolute pain :/

```>pages.csv
10000,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/MAC/ROMAN.TXT,1
10006,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/MAC/GREEK.TXT,1
10007,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/MAC/CYRILLIC.TXT,1
10029,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/MAC/LATIN2.TXT,1
10079,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/MAC/ICELAND.TXT,1
10081,http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/MAC/TURKISH.TXT,1
```

The numbering scheme for the `ISO-8859-X` series is `28590 + X`:

```>pages.csv
28591,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-1.TXT,1
28592,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-2.TXT,1
28593,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-3.TXT,1
28594,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-4.TXT,1
28595,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-5.TXT,1
28596,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-6.TXT,1
28597,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-7.TXT,1
28598,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-8.TXT,1
28599,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-9.TXT,1
28600,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-10.TXT,1
28601,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-11.TXT,1
28603,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-13.TXT,1
28604,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-14.TXT,1
28605,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-15.TXT,1
28606,http://www.unicode.org/Public/MAPPINGS/ISO8859/8859-16.TXT,1
```

## Manually-generated codepages

Other codepages are not easily available.  They were manually generated:


Code Page 858 (Multilingual Latin I + Euro) is identical to 850 except for point
0xD5 (which now maps to the Euro symbol)

```>pages.csv
858,,1
```

Developing International Software for Windows 95 and Windows NT (Nadine Kano)
describes the following codepages (scanned pages available on MSDN):

- 708   ASMO-708,Arabic (ASMO 708)

```>pages.csv
708,,1
```

MSDN Go Global Developer Center describes the following codepages:

- 720   (Windows OEM Arabic) 

```>pages.csv
720,,1
```

The known missing codepages are enumerated in the README.

## Building Notes

The script `make.sh` (described later) will get these files and massage the data
(printing code-unicode pairs).  The eventual tables are dropped in the paths
`./codepages/<CODEPAGE>.TBL`.  For example, the last 10 lines of `10000.TBL` are

```>
0xF6	0x02C6
0xF7	0x02DC
0xF8	0x00AF
0xF9	0x02D8
0xFA	0x02D9
0xFB	0x02DA
0xFC	0x00B8
0xFD	0x02DD
0xFE	0x02DB
0xFF	0x02C7
```

which implies that code 0xF6 is `String.fromCharCode(0x02C6)` and vice versa.


# Building the script

`make.njs` takes a codepage argument, reads the corresponding table file and
generates JS code for encoding and decoding:

## Raw Codepages

```>make.njs
#!/usr/bin/env node
var argv = process.argv.slice(1), fs = require('fs');
if(argv.length < 2) {
    console.error("usage: make.njs <codepage_index> [variable]");
    process.exit(22); /* EINVAL */
}

var cp = argv[1];
var jsvar = argv[2] || "cptable";
var x = fs.readFileSync("codepages/" + cp + ".TBL","utf8");
var maxcp = 0;

var y = x.split("\n").map(function(z) {
    var w = z.split("\t");
    if(w.length < 2) return w;
    return [Number(w[0]), Number(w[1])];
}).filter(function(z) { return z.length > 1; });
```

The DBCS and SBCS code generation strategies are different.  The maximum code is
used to distinguish (max 0xFF for SBCS). 

```
for(var i = 0; i != y.length; ++i) if(y[i][0] > maxcp) maxcp = y[i][0];

var enc = {}, dec = (maxcp < 256 ? [] : {});
for(var i = 0; i != y.length; ++i) {
    dec[y[i][0]] = String.fromCharCode(y[i][1]);
    enc[String.fromCharCode(y[i][1])] = y[i][0];
}

var odec, oenc, outstr;
if(maxcp < 256) {
```

The unicode character `0xFFFD` (REPLACEMENT CHARACTER) is used as a placeholder
for characters that are not specified in the map (for example, `0xF0` is not in
code page 10000).

For SBCS, the idea is to embed a raw string with the contents of the 256 codes.
The `dec` field is merely a split of the string, and `enc` is an eversion:

```
    for(var i = 0; i != 256; ++i) if(typeof dec[i] === "undefined") dec[i] = String.fromCharCode(0xFFFD);
    odec = JSON.stringify(dec.join("")) + '.split("")'
    outstr = '(function(){ var d = ' + odec + ', e = {}; for(var i=0;i!=d.length;++i) if(d[i].charCodeAt(0) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d }; })();'; 
} else {
```

DBCS is similar, except that the space is sliced into 256-byte chunks (strings
are only generated for those high-bytes represented in the codepage).  

The strategy is to construct an array-of-arrays so that `dd[high][low]` is the
character associated with the code.  This array is combined at runtime to yield
the complete decoding object (and the encoding object is an eversion):

```
    var dd = [];
    for(var i in dec) if(dec.hasOwnProperty(i)) {
        if(typeof dd[i >> 8] === "undefined") dd[i >> 8] = [];
        dd[i >> 8][i % 256] = dec[i]; 
    }
    outstr = '(function(){ var d = {}, e = {}, D = [], j;\n';
    for(var i = 0; i != 256; ++i) if(dd[i]) {
        for(var j = 0; j != 256; ++j) if(typeof dd[i][j] === "undefined") dd[i][j] = String.fromCharCode(0xFFFD);
        outstr += 'D[' + i + '] = ' + JSON.stringify(dd[i].join("")) + '.split("");\n';
        outstr += 'for(j = 0; j != D[' + i + '].length; ++j) if(D[' + i + '][j].charCodeAt(0) !== 0xFFFD) { e[D[' + i + '][j]] = ' + i + ' * 256 + j; d[' + i + ' * 256 + j] = D[' + i + '][j];}\n'
    }
    outstr += 'return {"enc": e, "dec": d }; })();'; 
}
console.log(jsvar + "[" + cp + "] = " + outstr);

```

`make.sh` generates the tables used by `make.njs`.  The raw unicode TXT files
are columnar: `code unicode #comments`.  For example, the last 10 lines of the
text file ROMAN.TXT (for CP 10000) are:

```>
0xF6	0x02C6	#MODIFIER LETTER CIRCUMFLEX ACCENT
0xF7	0x02DC	#SMALL TILDE
0xF8	0x00AF	#MACRON
0xF9	0x02D8	#BREVE
0xFA	0x02D9	#DOT ABOVE
0xFB	0x02DA	#RING ABOVE
0xFC	0x00B8	#CEDILLA
0xFD	0x02DD	#DOUBLE ACUTE ACCENT
0xFE	0x02DB	#OGONEK
0xFF	0x02C7	#CARON
```

In processing the data, the comments (after the `#`) are stripped and undefined
elements (like `0x7F` for CP 10000) are removed.

```>make.sh
#!/bin/bash
INFILE=${1:-pages.csv}
OUTFILE=${2:-cptable.js}
JSVAR=${3:-cptable}

mkdir -p codepages bits
rm -f $OUTFILE $OUTFILE.tmp
echo "/*jshint -W100 */" > $OUTFILE.tmp
echo "var $JSVAR = {};" >> $OUTFILE.tmp
awk -F, '{print $1, $2, $3}' $INFILE | while read cp url cptype; do
    echo $cp $url
    if [ ! -e codepages/$cp.TBL ]; then
        curl $url | sed 's/#.*//g' | awk 'NF==2' > codepages/$cp.TBL
    fi
    echo "if(typeof $JSVAR === 'undefined') $JSVAR = {};" > bits/$cp.js.tmp
    node make.njs $cp $JSVAR | tee -a bits/$cp.js.tmp >> $OUTFILE.tmp
    sed 's/"\([0-9]+\)":/\1:/g' <bits/$cp.js.tmp >bits/$cp.js
    rm -f bits/$cp.js.tmp
done
echo "if(typeof module !== 'undefined') module.exports = $JSVAR;" >> $OUTFILE.tmp
sed 's/"\([0-9]+\)":/\1:/g' <$OUTFILE.tmp >$OUTFILE
rm -f $OUTFILE.tmp
```

## Utilities

The encode and decode functions are kept in a separate script:

```>cputils.js
if(typeof cptable === "undefined" && typeof require !== "undefined") var cptable = require('./cptable');

(function(cpt){
```

There are more efficient ways to handle certain codepages, so they are handled
in a different manner:

```>cputils.js
  var magic = {
    "1200":"utf16le",
    "1201":"utf16be",
    "12000":"utf32le",
    "12001":"utf32be",
    "20127":"ascii",
    "65000":"utf7",
    "65001":"utf8"
  };
```

Both encode and decode deal with data represented as:

- String (encode expects UTF-8 string, decode interprets UTF-8 chars as codes)
- Array (encode expects array of UTF-8 characters, decode expects numbers)
- Buffer (encode expects UTF-8 string, decode expects codepoints).

The `ofmt` variable controls the return value (`str`, `arr`, `buf` respectively)
while the input format is automatically determined. 

```>cputils.js
  var encode = function(cp, data, ofmt) {
    var out = [], w, i, j = 0;
    if(cpt[cp]) {
      for(i = 0; i != data.length; ++i, ++j) {
        w = cpt[cp].enc[data[i]];
        out[j] = w % 256;
        if(w > 255) {
          out[j] = (w/256)|0;
          out[++j] = w%256;
        }
      }
    }
    else if(magic[cp]) switch(magic[cp]) { 
      case "utf8": 
        for(i = 0; i != data.length; ++i, ++j) {
          w = data[i].charCodeAt(0);
          if(w <= 0x007F) out[j] = w;
          else if(w <= 0x07FF) { 
            out[j]   = 192 + (w >> 6);
            out[++j] = 128 + (w % 64); 
          } else {
            out[j]   = 224 + (w >> 12);
            out[++j] = 128 + ((w >> 6) % 64); 
            out[++j] = 128 + (w % 64); 
          } 
        } break;
      default: throw "Unsupported magic: " + cp + " " + magic[cp];
    }
    else throw new Error("Unrecognized CP: " + cp); 
    if(ofmt == 'str') return out.map(function(x) { return String.fromCharCode(x); }).join("");
    if(ofmt == 'buf') return new Buffer(out);
    return out;
  };
  var decode = function(cp, data, endian) {
    var out = "", w, i, j = 1;
    if(cpt[cp]) for(i = 0; i != data.length; i+=j) {
      j = 1;
      w = cpt[cp].dec[data[i]];
      if(typeof w === 'undefined') {
        j = 2;
        w = cpt[cp].dec[endian ? data[i]+data[i+1]*256 : data[i]*256 + data[i+1]];
      }
      if(typeof w === 'undefined') throw 'Unrecognized code: ' + data[i] + ' ' + data[i+j-1] + ' ' + i + ' ' + j;
      out += w;
    }
    else if(magic[cp]) switch(magic[cp]) {
      case "utf8":
        for(i = 0; i != data.length; i+=j) {
          j = 1;
          if(data[i] < 128) w = data[i];
          else if(data[i] < 224) { w = (data[i]&31)*64+(data[i+1]&63); j=2; }
          else { w=(data[i]&15)*4096+(data[i+1]&63)*64+(data[i+2]&63); j=3; }
          out += String.fromCharCode(w);
        } break;
      default: throw "Unsupported magic: " + cp + " " + magic[cp];
    }
    return out; 
  };
  var hascp = function(cp) {
    return cpt[cp] || magic[cp];
  };
  cpt.utils = { decode: decode, encode: encode, hascp: hascp, magic: magic };
})(cptable);

if(typeof module !== "undefined") module.exports = cptable;
```

# Tests

The tests include JS validity tests (requiring or eval'ing code):

```>test.js
var fs = require('fs'), vm = require('vm');
var cptable, sbcs;
describe('source', function() {
    it('should load node', function() { cptable = require('./'); }); 
    it('should load sbcs', function() { sbcs = require('./sbcs'); }); 
    it('should process bits', function() {
        var files = fs.readdirSync('bits').filter(function(x){return x.substr(-3)==".js";});
        files.forEach(function(x) {
            vm.runInThisContext(fs.readFileSync('./bits/' + x));
        });
    });
});
```

The consistency tests make sure that encoding and decoding are pseudo inverses:

```>test.js
describe('consistency', function() {
    cptable = require('./');
    Object.keys(cptable).filter(function(w) { return w != "utils"; }).forEach(function(x) {
        it('should consistently process CP ' + x, function() {
            var cp = cptable[x];
            Object.keys(cp.dec).forEach(function(d) {
                if(cp.enc[cp.dec[d]] != d) {
                    if(typeof cp.enc[cp.dec[d]] !== "undefined") return;
                    if(cp.dec[d].charCodeAt(0) == 0xFFFD) return;
                    if(cp.dec[cp.enc[cp.dec[d]]] === cp.dec[d]) return; 
                    throw x + " e.d[" + d + "] = " + cp.enc[cp.dec[d]] + "; d[" + d + "]=" + cp.dec[d] + "; d.e.d[" + d + "] = " + cp.dec[cp.enc[cp.dec[d]]]; 
                }
            });
            Object.keys(cp.enc).forEach(function(e) {
                if(cp.dec[cp.enc[e]] != e) {
                    throw x + " d.e[" + e + "] = " + cp.dec[cp.enc[e]] + "; e[" + e + "]=" + cp.enc[e] + "; e.d.e[" + e + "] = " + cp.enc[cp.dec[cp.enc[e]]]; 
                }
            });
        });
    });
});
```

The `testfile` helper function reads a file and compares to node's read facilities:

```>test.js
function testfile(f,cp,type) {
    var d = fs.readFileSync(f);
    var x = fs.readFileSync(f, type);
    var y = cptable.utils.decode(65001, d);
    if(x !== y) throw "" + x + "!=" + y;
    var z = cptable.utils.encode(65001,x);
    if(z.length != d.length) throw "" + JSON.stringify(z) + " != " + JSON.stringify(d);
    for(var i = 0; i != d.length; ++i) if(d[i] !== z[i]) throw "" + i + " " + d[i] + "!=" + z[i];
}
```

The `utf8` tests verify utf8 encoding of the actual JS sources:

```>test.js
describe('utf8', function() {
    cptable = require('./');
    ['codepage.md','README.md','cptable.js','cputils.js'].forEach(function(f) {
        it('should process ' + f, function() { testfile(f,65001,'utf-8'); });
    });
    it('should process bits', function() {
        var files = fs.readdirSync('bits').filter(function(x){return x.substr(-3)==".js";});
        files.forEach(function(f) { testfile('./bits/' + f,65001,'utf-8'); }); 
    });
});
```

The utf* and ascii tests attempt to test other magic formats:

```>test.js
var m = cptable.utils.magic;
Object.keys(m).forEach(function(t){describe(m[t], function() {
    it("should process base." + m[t], fs.existsSync('./test_files/base.' + m[t]) ?
        function() { testfile('./test_files/base.' + m[t], t, m[t]); }
    : null);
});})
```

# Nitty Gritty

```json>package.json
{
  "name": "codepage",
  "version": "0.5.3",
  "author": "SheetJS",
  "description": "pure-JS library to handle codepages",
  "keywords": [ "codepage", "iconv", "convert", "strings" ],
  "main": "cputils.js",
  "dependencies": { "voc":"" },
  "devDependencies": { "mocha":"" },
  "scripts": { "build": "make js", "test": "make test" },
  "repository": {"type":"git","url":"git://github.com/SheetJS/js-codepage.git"},
  "bugs": { "url": "https://github.com/SheetJS/js-codepage/issues" },
  "license": "Apache-2.0",
  "engines": { "node": ">=0.8" }
}
```

```>.vocrc
{ "post": "make js" }
```

```make>Makefile
SHELL=/bin/bash
VOC=voc


.PHONY: js voc
voc: codepage.md
        $(VOC) codepage.md

js:
        bash make.sh <(awk -F, '$$3=="1"' pages.csv) sbcs.js cptable
        bash make.sh

clean:
        rm -f make.sh Makefile .vocrc package.json *.csv bits/*.js

test:
        mocha -R spec
```

```>.gitignore
.gitignore
codepages/
.vocrc
node_modules/
Makefile
make.sh
make.njs
pages.csv
```
