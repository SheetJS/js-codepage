# Verifying Codepages

After installing every language pack in Windows 7, many codepages are available
via the .NET System.Text.Encoding class.  The MakeEncoding.cs source included with
the project generates a full manifest that can be parsed into a mapping table.

The included `nls2tbl` script extracts data from the various `C_#####.NLS` files
available in the system or system32 directories in various versions of Windows.

Many codepages are also available in various iconv libraries, but there are some
differences.  For example, some codepages break ASCII by using the Arabic percent
sign ٪ U+066A but other libraries assume they preserve the ASCII space.  

# Missing Codepages

The following codepages are not implemented. Normative references may not be
available in all cases.  Furthermore, other software packages are known to hack
certain codepages (for example, Mozilla treats ASMO-708 as an alias of Arabic
ISO-8869-6 when in fact there are many differences), so all implementations
*should* be cleanroom when possible.

- 709   Arabic (ASMO-449+, BCON V4)
- 710   Arabic - Transparent Arabic
- 50229 ISO 2022 Traditional Chinese
- 50930 EBCDIC Japanese (Katakana) Extended
- 50931 EBCDIC US-Canada and Japanese
- 50933 EBCDIC Korean Extended and Korean
- 50935 EBCDIC Simplified Chinese Extended and Simplified Chinese
- 50936 EBCDIC Simplified Chinese
- 50937 EBCDIC US-Canada and Traditional Chinese
- 50939 EBCDIC Japanese (Latin) Extended and Japanese
- 51950 EUC Traditional Chinese

Each version of Windows adds a few and removes a few codepages, so the missing
codepages most likely reside in a specific version that we may not be able to
obtain.  These notes document our progress.

## Arabic codepages 709-710

These codepages are not available in the Arabic version of Windows XP.  They may
be available in the Arabic versions of MS-DOS or Windows 3.1/95/98/2000.

The "Code Page and Text Layout Conversion Utility" CONVTEXT.EXE ships with some
versions of Office.  It can convert from the various codepages to ANSI.

To produce a UTF16LE (1200) manifest, convert from the relevant codepage to ANSI
and then convert from ANSI to "Unicode using Arabic ANSI Code Page".

Since there is no way to convert directly to unicode using the tool, CONVTEXT is
useful only for the characters which exist in both the relevant codepage and in
codepage 1256.  There are various non-Microsoft sources which claim to document
both codepages, but there is no way to verify the claim.

## EUC Traditional Chinese 51950

The raw NLS file C_51950.NLS supposedly exists, although there is no way for a US
version of Windows to obtain the file.  As with the Arabic Codepages, most likely
the manifest is only available in Chinese versions of Windows 95/98/2000

### ISO 2022 Traditional Chinese 50229

Some sources claim 50229 is ISO-2022-TW and others claim it is ISO-2022-CN.

### EBCDIC Codepages 50930-50939

WHATWG claims that the supposed-EBCDIC codepages are really hybrids of ASCII (even
though the Microsoft name suggests they should be the same as the originals)
