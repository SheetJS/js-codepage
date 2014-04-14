#!/bin/bash
if [ ! -e dotnet/out ]; then exit; fi
<dotnet/out tr -s ' ' '\t' | awk 'NF>2 {if(outfile) close(outfile); outfile="codepages/" $1 ".TBL"} NF==2 {print > outfile}'
