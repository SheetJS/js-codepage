# Codepages for JS

[Codepages](https://en.wikipedia.org/wiki/Codepage) are character encodings.  In
many contexts, single-byte character sets are used in lieu of standard multibyte
Unicode encodings.  They use 256 characters with a simple mapping.

[unicode.org](http://www.unicode.org/Public/MAPPINGS/) hosts lists of mappings.
The build script automatically downloads and parses the mappings in order to
generate the full script.  The `pages.csv` description in `codepage.md` controls
which codepages are used.

## Setup

In the browser:

    <script src="cptable.js"></script>
    <script src="cputils.js"></script>

The complete set of codepages is large because of some Double Byte Character Set
encodings.  A much smaller file that just includes SBCS codepages is provided in
this repo (`sbcs.js`).

If you know which codepages you need, you can include individual scripts for
each codepage.  The individual files are provided in the `bits/` directory.
For example, to include only the Mac codepages:

    <script src="bits/10000.js"></script>
    <script src="bits/10006.js"></script>
    <script src="bits/10007.js"></script>
    <script src="bits/10029.js"></script>
    <script src="bits/10079.js"></script>
    <script src="bits/10081.js"></script>

All of the browser scripts define and append to the `cptable` object.  To rename
the object, edit the `JSVAR` shell variable in `make.sh` and run the script.

The utilities functions are contained in `cputils.js`, which assumes that the
appropriate codepage scripts were loaded.

In node:

    var cptable = require('codepage');

## Usage

The codepages are indexed by number.  To get the unicode character for a given 
codepoint, use the `dec` property:

    var unicode_cp10000_255 = cptable[10000].dec[255]; // ˇ

To get the codepoint for a given character, use the `enc` property:

    var cp10000_711 = cptable[10000].enc[String.fromCharCode(711)]; // 255

There are a few utilities that deal with strings and buffers:

    var 汇总 = cptable.utils.decode(936, [0xbb,0xe3,0xd7,0xdc]);
    var buf =  cptable.utils.encode(936,  汇总);

## Building the script

This script uses [voc](npm.im/voc).  The script to build the codepage tables and
the JS source is `codepage.md`, so building is as simple as `voc codepage.md`.

## Supported Codepages

The standard Windows codepages are supported:

- 1250  Windows Central Europe 
- 1251  Windows Cyrillic 
- 1252  Windows Latin I
- 1253  Windows Green
- 1254  Windows Turkish
- 1255  Windows Hebrew
- 1256  Windows Arabic
- 1257  Windows Baltic
- 1258  Windows Vietnam
- 874   Windows Thai

The full collection of `ISO-8859` codepages are also supported.  The East-Asian 
Double Byte Character Sets are also supported:

- 932   Japanese Shift-JIS
- 936   Simplified Chinese GBK
- 949   Korean
- 950   Traditional Chinese Big5

The complete list of supported codepages can be found in the file `pages.csv`.

## Missing Codepages

The following codepages are not implemented. Normative references may not be
available in all cases.  Furthermore, other software packages are known to hack
certain codepages (for example, Mozilla treats ASMO-708 as an alias of Arabic 
ISO-8869-6 when in fact there are many differences), so all implementations
*should* be cleanroom when possible.

- 709   Arabic (ASMO-449+, BCON V4)
- 710   Arabic - Transparent Arabic
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
- 1200  Unicode UTF-16, little endian byte order (BMP of ISO 10646); available only to managed applications
- 1201  Unicode UTF-16, big endian byte order; available only to managed applications
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
- 12000 Unicode UTF-32, little endian byte order; available only to managed applications
- 12001 Unicode UTF-32, big endian byte order; available only to managed applications
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
- 20127 US-ASCII (7-bit)
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
- 21027 (deprecated) <-- is this necessary?
- 21866 Ukrainian (KOI8-U); Cyrillic (KOI8-U)
- 29001 Europa 3
- 38598 ISO 8859-8 Hebrew; Hebrew (ISO-Logical)
- 50220 ISO 2022 Japanese with no halfwidth Katakana; Japanese (JIS)
- 50221 ISO 2022 Japanese with halfwidth Katakana; Japanese (JIS-Allow 1 byte Kana)
- 50222 ISO 2022 Japanese JIS X 0201-1989; Japanese (JIS-Allow 1 byte Kana - SO/SI)
- 50225 ISO 2022 Korean
- 50227 ISO 2022 Simplified Chinese; Chinese Simplified (ISO 2022)
- 50229 ISO 2022 Traditional Chinese
- 50930 EBCDIC Japanese (Katakana) Extended
- 50931 EBCDIC US-Canada and Japanese
- 50933 EBCDIC Korean Extended and Korean
- 50935 EBCDIC Simplified Chinese Extended and Simplified Chinese
- 50936 EBCDIC Simplified Chinese
- 50937 EBCDIC US-Canada and Traditional Chinese
- 50939 EBCDIC Japanese (Latin) Extended and Japanese
- 51932 EUC Japanese
- 51936 EUC Simplified Chinese; Chinese Simplified (EUC)
- 51949 EUC Korean
- 51950 EUC Traditional Chinese
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
- 65000 Unicode (UTF-7)

## Sources

- [Unicode Consortium Public Mappings](http://www.unicode.org/Public/MAPPINGS/)
- [Code Page Enumeration](http://msdn.microsoft.com/en-us/library/cc195051.aspx)
- [Code Page Identifiers](http://msdn.microsoft.com/en-us/library/windows/desktop/dd317756(v=vs.85).aspx)
