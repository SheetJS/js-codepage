#!/bin/bash
INFILE=${1:-pages.csv}
OUTFILE=${2:-cptable.js}
JSVAR=${3:-cptable}
VERSION=$(cat package.json | grep version | tr -dc [0-9.])

mkdir -p codepages bits
rm -f $OUTFILE $OUTFILE.tmp
echo "/*! $OUTFILE (C) 2013-present SheetJS -- http://sheetjs.com */" > $OUTFILE.tmp
echo "/*jshint -W100 */" >> $OUTFILE.tmp
echo "var $JSVAR = {version:\"$VERSION\"};" >> $OUTFILE.tmp
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
echo "// eslint-disable-next-line no-undef" >> $OUTFILE.tmp
echo "if (typeof module !== 'undefined' && module.exports && typeof DO_NOT_EXPORT_CODEPAGE === 'undefined') module.exports = $JSVAR;" >> $OUTFILE.tmp
sed 's/"\([0-9]+\)":/\1:/g' <$OUTFILE.tmp >$OUTFILE
rm -f $OUTFILE.tmp
