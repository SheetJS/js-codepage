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

## Generated Codepages

The following codepages are available in .NET on Windows:

- 708   Arabic (ASMO 708)
- 720   Arabic (Transparent ASMO); Arabic (DOS)
- 858   OEM Multilingual Latin 1 + Euro symbol
- 870   IBM EBCDIC Multilingual/ROECE (Latin 2); IBM EBCDIC Multilingual Latin 2
- 1047  IBM EBCDIC Latin 1/Open System
- 1140  IBM EBCDIC US-Canada (037 + Euro symbol); IBM EBCDIC (US-Canada-Euro)
- 1141  IBM EBCDIC Germany (20273 + Euro symbol); IBM EBCDIC (Germany-Euro)
- 1142  IBM EBCDIC Denmark-Norway (20277 + Euro symbol); IBM EBCDIC (Denmark-Norway-Euro)
- 1143  IBM EBCDIC Finland-Sweden (20278 + Euro symbol); IBM EBCDIC (Finland-Sweden-Euro)
- 1144  IBM EBCDIC Italy (20280 + Euro symbol); IBM EBCDIC (Italy-Euro)
- 1145  IBM EBCDIC Latin America-Spain (20284 + Euro symbol); IBM EBCDIC (Spain-Euro)
- 1146  IBM EBCDIC United Kingdom (20285 + Euro symbol); IBM EBCDIC (UK-Euro)
- 1147  IBM EBCDIC France (20297 + Euro symbol); IBM EBCDIC (France-Euro)
- 1148  IBM EBCDIC International (500 + Euro symbol); IBM EBCDIC (International-Euro)
- 1149  IBM EBCDIC Icelandic (20871 + Euro symbol); IBM EBCDIC (Icelandic-Euro)
- 1361  Korean (Johab)
- 10001 Japanese (Mac)
- 10002 MAC Traditional Chinese (Big5); Chinese Traditional (Mac)
- 10003 Korean (Mac)
- 10004 Arabic (Mac)
- 10005 Hebrew (Mac)
- 10008 MAC Simplified Chinese (GB 2312); Chinese Simplified (Mac)
- 10010 Romanian (Mac)
- 10017 Ukrainian (Mac)
- 10021 Thai (Mac)
- 10082 Croatian (Mac)
- 20000 CNS Taiwan; Chinese Traditional (CNS)
- 20001 TCA Taiwan
- 20002 Eten Taiwan; Chinese Traditional (Eten)
- 20003 IBM5550 Taiwan
- 20004 TeleText Taiwan
- 20005 Wang Taiwan
- 20105 IA5 (IRV International Alphabet No. 5, 7-bit); Western European (IA5)
- 20106 IA5 German (7-bit)
- 20107 IA5 Swedish (7-bit)
- 20108 IA5 Norwegian (7-bit)
- 20261 T.61
- 20269 ISO 6937 Non-Spacing Accent
- 20273 IBM EBCDIC Germany
- 20277 IBM EBCDIC Denmark-Norway
- 20278 IBM EBCDIC Finland-Sweden
- 20280 IBM EBCDIC Italy
- 20284 IBM EBCDIC Latin America-Spain
- 20285 IBM EBCDIC United Kingdom
- 20290 IBM EBCDIC Japanese Katakana Extended
- 20297 IBM EBCDIC France
- 20420 IBM EBCDIC Arabic
- 20423 IBM EBCDIC Greek
- 20424 IBM EBCDIC Hebrew
- 20833 IBM EBCDIC Korean Extended
- 20838 IBM EBCDIC Thai
- 20866 Russian (KOI8-R); Cyrillic (KOI8-R)
- 20871 IBM EBCDIC Icelandic
- 20880 IBM EBCDIC Cyrillic Russian
- 20905 IBM EBCDIC Turkish
- 20924 IBM EBCDIC Latin 1/Open System (1047 + Euro symbol)
- 20932 Japanese (JIS 0208-1990 and 0212-1990)
- 20936 Simplified Chinese (GB2312); Chinese Simplified (GB2312-80)
- 20949 Korean Wansung
- 21025 IBM EBCDIC Cyrillic Serbian-Bulgarian
- 21866 Ukrainian (KOI8-U); Cyrillic (KOI8-U)
- 29001 Europa 3
- 38598 ISO 8859-8 Hebrew; Hebrew (ISO-Logical)
- 50220 ISO 2022 Japanese with no halfwidth Katakana; Japanese (JIS)
- 50221 ISO 2022 Japanese with halfwidth Katakana; Japanese (JIS-Allow 1 byte Kana)
- 50222 ISO 2022 Japanese JIS X 0201-1989; Japanese (JIS-Allow 1 byte Kana - SO/SI)
- 50225 ISO 2022 Korean
- 50227 ISO 2022 Simplified Chinese; Chinese Simplified (ISO 2022)
- 51932 EUC Japanese
- 51936 EUC Simplified Chinese; Chinese Simplified (EUC)
- 51949 EUC Korean
- 52936 HZ-GB2312 Simplified Chinese; Chinese Simplified (HZ)
- 54936 Windows XP and later: GB18030 Simplified Chinese (4 byte); Chinese Simplified (GB18030)
- 57002 ISCII Devanagari
- 57003 ISCII Bengali
- 57004 ISCII Tamil
- 57005 ISCII Telugu
- 57006 ISCII Assamese
- 57007 ISCII Oriya
- 57008 ISCII Kannada
- 57009 ISCII Malayalam
- 57010 ISCII Gujarati
- 57011 ISCII Punjabi

```>pages.csv
708,,1
720,,1
858,,1
870,,1
1047,,1
1140,,1
1141,,1
1142,,1
1143,,1
1144,,1
1145,,1
1146,,1
1147,,1
1148,,1
1149,,1
1361,,2
10001,,2
10002,,2
10003,,2
10004,,1
10005,,1
10008,,2
10010,,1
10017,,1
10021,,1
10082,,1
20000,,2
20001,,2
20002,,2
20003,,2
20004,,2
20005,,2
20105,,1
20106,,1
20107,,1
20108,,1
20261,,2
20269,,1
20273,,1
20277,,1
20278,,1
20280,,1
20284,,1
20285,,1
20290,,1
20297,,1
20420,,1
20423,,1
20424,,1
20833,,1
20838,,1
20866,,1
20871,,1
20880,,1
20905,,1
20924,,1
20932,,2
20936,,2
20949,,2
21025,,1
21866,,1
29001,,1
38598,,1
50220,,2
50221,,2
50222,,2
50225,,2
50227,,2
51932,,2
51936,,2
51949,,2
52936,,2
54936,,2
57002,,2
57003,,2
57004,,2
57005,,2
57006,,2
57007,,2
57008,,2
57009,,2
57010,,2
57011,,2
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

## Windows-dependent build step

To build the sources on windows, consult `dotnet/MakeEncoding.cs`.

After saving the standard output to `out`, a simple awk script (`dotnet.sh`) takes care of the rest:

```>dotnet.sh
#!/bin/bash
if [ ! -e dotnet/out ]; then exit; fi
<dotnet/out tr -s ' ' '\t' | awk 'NF>2 {if(outfile) close(outfile); outfile="codepages/" $1 ".TBL"} NF==2 {print > outfile}'
```

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
echo "/* $OUTFILE (C) 2013-2014 SheetJS -- http://sheetjs.com */" > $OUTFILE.tmp
echo "/*jshint -W100 */" >> $OUTFILE.tmp
echo "var $JSVAR = {};" >> $OUTFILE.tmp
if [ -e dotnet.sh ]; then bash dotnet.sh; fi
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
echo "if (typeof module !== 'undefined' && module.exports) module.exports = $JSVAR;" >> $OUTFILE.tmp
sed 's/"\([0-9]+\)":/\1:/g' <$OUTFILE.tmp >$OUTFILE
rm -f $OUTFILE.tmp
```

## Utilities

The encode and decode functions are kept in a separate script (cputils.js).

Both encode and decode deal with data represented as:

- String (encode expects JS string, decode interprets UCS2 chars as codes)
- Array (encode expects array of JS String characters, decode expects numbers)
- Buffer (encode expects UTF-8 string, decode expects codepoints/bytes).

The `ofmt` variable controls `encode` output (`str`, `arr` respectively)
while the input format is automatically determined.

# Tests

The tests include JS validity tests (requiring or eval'ing code):

```>test.js
var fs = require('fs'), assert = require('assert'), vm = require('vm');
var cptable, sbcs;
describe('source', function() {
  it('should load node', function() { cptable = require('./'); });
  it('should load sbcs', function() { sbcs = require('./sbcs'); });
  it('should load excel', function() { excel = require('./cpexcel'); });
  it('should process bits', function() {
    var files = fs.readdirSync('bits').filter(function(x){return x.substr(-3)==".js";});
    files.forEach(function(x) {
      vm.runInThisContext(fs.readFileSync('./bits/' + x));
    });
  });
});
```

The README tests verify the snippets in the README:

```>test.js
describe('README', function() {
  var readme = function() {
    var unicode_cp10000_255 = cptable[10000].dec[255]; // ˇ
    assert.equal(unicode_cp10000_255, "ˇ");

    var cp10000_711 = cptable[10000].enc[String.fromCharCode(711)]; // 255
    assert.equal(cp10000_711, 255);

    var b1 = [0xbb,0xe3,0xd7,0xdc];
    var 汇总 = cptable.utils.decode(936, b1);
    var buf =  cptable.utils.encode(936,  汇总);
    assert.equal(汇总,"汇总");
    assert.equal(buf.length, 4);
    for(var i = 0; i != 4; ++i) assert.equal(b1[i], buf[i]);
  };
  it('should be correct', function() {
    cptable.utils.cache.encache();
    readme();
    cptable.utils.cache.decache();
    readme();
  });
});
```

The consistency tests make sure that encoding and decoding are pseudo inverses:

```>test.js
describe('consistency', function() {
  cptable = require('./');
  U = cptable.utils;
  var chk = function(cptable, cacheit) { return function(x) {
    it('should consistently process CP ' + x + ' ' + cacheit, function() {
      var cp = cptable[x], D = cp.dec, E = cp.enc;
      if(cacheit) cptable.utils.cache.encache();
      else cptable.utils.cache.decache();
      Object.keys(D).forEach(function(d) {
        if(E[D[d]] != d) {
          if(typeof E[D[d]] !== "undefined") return;
          if(D[d].charCodeAt(0) == 0xFFFD) return;
          if(D[E[D[d]]] === D[d]) return;
          throw new Error(x + " e.d[" + d + "] = " + E[D[d]] + "; d[" + d + "]=" + D[d] + "; d.e.d[" + d + "] = " + D[E[D[d]]]);
        }
      });
      Object.keys(E).forEach(function(e) {
        if(D[E[e]] != e) {
          throw new Error(x + " d.e[" + e + "] = " + D[E[e]] + "; e[" + e + "]=" + E[e] + "; e.d.e[" + e + "] = " + E[D[E[e]]]);
        }
      });
      var corpus = ["foobar"];
      corpus.forEach(function(w){
        assert.equal(U.decode(x,U.encode(x,w)),w);
      });
      cptable.utils.cache.encache();
    });
  }; };
  Object.keys(cptable).filter(function(w) { return w != "utils"; }).forEach(chk(cptable, true));
  Object.keys(cptable).filter(function(w) { return w != "utils"; }).forEach(chk(cptable, false));
});
```

The next tests look at possible entry conditions:

```
describe('entry conditions', function() {
  it('should fail to load utils if cptable unavailable', function() {
    var sandbox = {};
    var ctx = vm.createContext(sandbox);
    assert.throws(function() {
      vm.runInContext(fs.readFileSync('cputils.js','utf8'),ctx);
    });
  });
  it('should load utils if cptable is available', function() {
    var sandbox = {};
    var ctx = vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync('cpexcel.js','utf8'),ctx);
    vm.runInContext(fs.readFileSync('cputils.js','utf8'),ctx);
  });
  var chken = function(cp, i) {
    var c = function(cp, i, e) {
      var str = cptable.utils.encode(cp,i,e);
      var arr = cptable.utils.encode(cp,i.split(""),e);
      assert.deepEqual(str,arr);
      if(typeof Buffer === 'undefined') return;
      var buf = cptable.utils.encode(cp,new Buffer(i),e);
      assert.deepEqual(str,buf);
    };
    cptable.utils.cache.encache();
    c(cp,i);
    c(cp,i,'buf');
    c(cp,i,'arr');
    c(cp,i,'str');
    cptable.utils.cache.decache();
    c(cp,i);
    c(cp,i,'buf');
    c(cp,i,'arr');
    c(cp,i,'str');
  };
  describe('encode', function() {
    it('CP  1252 : sbcs', function() { chken(1252,"foobar"); });
    it('CP   708 : sbcs', function() { chken(708,"ت and ث smiley faces");});
    it('CP   936 : dbcs', function() { chken(936, "这是中文字符测试");});
  });
  var chkde = function(cp, i) {
    var c = function(cp, i) {
      var s;
      if(typeof Buffer !== 'undefined' && i instanceof Buffer) s = [].map.call(i, function(s){return String.fromCharCode(s); });
      else s=(i.map) ? i.map(function(s){return String.fromCharCode(s); }) : i;
      var str = cptable.utils.decode(cp,i);
      var arr = cptable.utils.decode(cp,s.join?s.join(""):s);
      assert.deepEqual(str,arr);
      if(typeof Buffer === 'undefined') return;
      var buf = cptable.utils.decode(cp,new Buffer(i));
      assert.deepEqual(str,buf);
    };
    cptable.utils.cache.encache();
    c(cp,i);
    cptable.utils.cache.decache();
    c(cp,i);
  };
  describe('decode', function() {
    it('CP  1252 : sbcs', function() { chkde(1252,[0x66, 0x6f, 0x6f, 0x62, 0x61, 0x72]); }); /* "foobar" */
    if(typeof Buffer !== 'undefined') it('CP   708 : sbcs', function() { chkde(708, new Buffer([0xca, 0x20, 0x61, 0x6e, 0x64, 0x20, 0xcb, 0x20, 0x73, 0x6d, 0x69, 0x6c, 0x65, 0x79, 0x20, 0x66, 0x61, 0x63, 0x65, 0x73])); }); /* ("ت and ث smiley faces") */
    it('CP   936 : dbcs', function() { chkde(936, [0xd5, 0xe2, 0xca, 0xc7, 0xd6, 0xd0, 0xce, 0xc4, 0xd7, 0xd6, 0xb7, 0xfb, 0xb2, 0xe2, 0xca, 0xd4]);}); /* "这是中文字符测试" */
  });
});
```

The `testfile` helper function reads a file and compares to node's read facilities:

```>test.js
function testfile(f,cp,type,skip) {
  var d = fs.readFileSync(f);
  var x = fs.readFileSync(f, type);
  var a = x.split("");
  var chk = function(cp) {
    var y = cptable.utils.decode(cp, d);
    assert.equal(x,y);
    var z = cptable.utils.encode(cp, x);
    if(z.length != d.length) throw new Error(f + " " + JSON.stringify(z) + " != " + JSON.stringify(d) + " : " + z.length + " " + d.length);
    for(var i = 0; i != d.length; ++i) if(d[i] !== z[i]) throw new Error("" + i + " " + d[i] + "!=" + z[i]);
    if(skip) return;
    z = cptable.utils.encode(cp, a);
    if(z.length != d.length) throw new Error(f + " " + JSON.stringify(z) + " != " + JSON.stringify(d) + " : " + z.length + " " + d.length);
    for(var i = 0; i != d.length; ++i) if(d[i] !== z[i]) throw new Error("" + i + " " + d[i] + "!=" + z[i]);
  }
  cptable.utils.cache.encache();
  chk(cp);
  if(skip) return;
  cptable.utils.cache.decache();
  chk(cp);
  cptable.utils.cache.encache();
}
```

The `utf8` tests verify utf8 encoding of the actual JS sources:

```>test.js
describe('node natives', function() {
  var node = [[65001, 'utf8',1], [1200, 'utf16le',1], [20127, 'ascii',0]];
  var unicodefiles = ['codepage.md','README.md','cptable.js'];
  var asciifiles = ['cputils.js'];
  node.forEach(function(w) {
    describe(w[1], function() {
      cptable = require('./');
      asciifiles.forEach(function(f) {
        it('should process ' + f, function() { testfile('./misc/'+f+'.'+w[1],w[0],w[1]); });
      });
      if(!w[2]) return;
      unicodefiles.forEach(function(f) {
        it('should process ' + f, function() { testfile('./misc/'+f+'.'+w[1],w[0],w[1]); });
      });
      if(w[1] === 'utf8') it('should process bits', function() {
        var files = fs.readdirSync('bits').filter(function(x){return x.substr(-3)==".js";});
        files.forEach(function(f) { testfile('./bits/' + f,w[0],w[1],true); });
      });
    });
  });
});
```

The utf* and ascii tests attempt to test other magic formats:

```>test.js
var m = cptable.utils.magic;
function cmp(x,z) {
  assert.equal(x.length, z.length);
  for(var i = 0; i != z.length; ++i) assert.equal(i+"/"+x.length+""+x[i], i+"/"+z.length+""+z[i]);
}
Object.keys(m).forEach(function(t){if(t != 16969) describe(m[t], function() {
  it("should process codepage.md." + m[t], fs.existsSync('./misc/codepage.md.' + m[t]) ?
    function() {
      var b = fs.readFileSync('./misc/codepage.md.utf8', "utf8");
      if(m[t] === "ascii") b = b.replace(/[\u0080-\uffff]*/g,"");
      var x = fs.readFileSync('./misc/codepage.md.' + m[t]);
      var y, z;
      cptable.utils.cache.encache();
      y = cptable.utils.decode(t, x);
      assert.equal(y,b);
      z = cptable.utils.encode(t, y);
      if(t != 65000) cmp(x,z);
      else { assert.equal(y, cptable.utils.decode(t, z)); }
      cptable.utils.cache.decache();
      y = cptable.utils.decode(t, x);
      assert.equal(y,b);
      z = cptable.utils.encode(t, y);
      if(t != 65000) cmp(x,z);
      else { assert.equal(y, cptable.utils.decode(t, z)); }
      cptable.utils.cache.encache();
    }
  : null);
  it("should process README.md." + m[t], fs.existsSync('./misc/README.md.' + m[t]) ?
    function() {
      var b = fs.readFileSync('./misc/README.md.utf8', "utf8");
      if(m[t] === "ascii") b = b.replace(/[\u0080-\uffff]*/g,"");
      var x = fs.readFileSync('./misc/README.md.' + m[t]);
      x = [].slice.call(x);
      cptable.utils.cache.encache();
      var y = cptable.utils.decode(t, x);
      assert.equal(y,b);
      cptable.utils.cache.decache();
      var y = cptable.utils.decode(t, x);
      assert.equal(y,b);
      cptable.utils.cache.encache();
    }
  : null);
});});
```

The codepage `6969` is not defined, so operations should fail:

```>test.js
describe('failures', function() {
  it('should fail to find CP 6969', function() {
    assert.throws(function(){cptable[6969].dec});
    assert.throws(function(){cptable[6969].enc});
  });
  it('should fail using utils', function() {
    assert(!cptable.utils.hascp(6969));
    assert.throws(function(){return cptable.utils.encode(6969, "foobar"); });
    assert.throws(function(){return cptable.utils.decode(6969, [0x20]); });
  });
  it('should fail with black magic', function() {
    assert(cptable.utils.hascp(16969));
    assert.throws(function(){return cptable.utils.encode(16969, "foobar"); });
    assert.throws(function(){return cptable.utils.decode(16969, [0x20]); });
  });
  it('should fail when presented with invalid char codes', function() {
    assert.throws(function(){cptable.utils.cache.decache(); return cptable.utils.encode(20127, [String.fromCharCode(0xAA)]);});
  });
});
```

# Nitty Gritty

```json>package.json
{
  "name": "codepage",
  "version": "1.1.0",
  "author": "SheetJS",
  "description": "pure-JS library to handle codepages",
  "keywords": [ "codepage", "iconv", "convert", "strings" ],
  "bin": {
    "codepage": "./bin/codepage.njs"
  },
  "main": "cputils.js",
  "dependencies": {
    "voc":"",
    "commander":""
  },
  "devDependencies": {
    "mocha":""
  },
  "repository": { "type":"git", "url":"git://github.com/SheetJS/js-codepage.git"},
  "scripts": {
    "pretest": "git submodule init && git submodule update",
    "test": "make test",
    "build": "make js"
  },
  "config": {
    "blanket": {
      "pattern": "[cptable.js,cputils.js,cpexcel.js]"
    }
  },
  "bugs": { "url": "https://github.com/SheetJS/js-codepage/issues" },
  "license": "Apache-2.0",
  "engines": { "node": ">=0.8" }
}
```

```>.vocrc
{ "post": "make js" }
```

```>.gitignore
.gitignore
codepages/
.vocrc
node_modules/
make.sh
make.njs
misc/coverage.html
```
