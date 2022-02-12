#!/bin/bash
INFILE=${1:-pages.csv}
OUTFILE=${2:-cptable.mjs}
VERSION=$(cat package.json | grep version | tr -dc [0-9.])

mkdir -p codepages bits
rm -f $OUTFILE $OUTFILE.tmp
echo "/*! $OUTFILE (C) 2013-present SheetJS -- http://sheetjs.com */" > $OUTFILE.tmp
echo "/*jshint -W100 */" >> $OUTFILE.tmp
echo "export const version = \"$VERSION\";" >> $OUTFILE.tmp
echo "const cptable = {};" >> $OUTFILE.tmp
if [ -e dotnet.sh ]; then bash dotnet.sh; fi
awk -F, '{print $1, $2, $3}' $INFILE | while read cp url cptype; do
    echo $cp $url
    if [ ! -e codepages/$cp.TBL ]; then
        curl $url | sed 's/#.*//g' | awk 'NF==2' > codepages/$cp.TBL
    fi
    node make.njs $cp cptable >> $OUTFILE.tmp
done
echo "export { cptable };" >> $OUTFILE.tmp
sed 's/"\([0-9]+\)":/\1:/g' <$OUTFILE.tmp >$OUTFILE
rm -f $OUTFILE.tmp
