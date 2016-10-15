#!/bin/bash
# make_baseline.sh -- generate baselines for tests
# Copyright (C) 2013-present  SheetJS
if [[ "$1" == "clean" ]]; then
	for i in cputils.js codepage.md codepage_mini.md README.md cptable.js; do
		for ext in ascii utf16le utf16be utf16le utf32le utf32be utf7; do
			rm -f misc/$i.$ext
		done
	done
	rm -f codepage_mini.md
	exit
fi

head -c 1000 codepage.md > codepage_mini.md

for i in cputils.js codepage.md codepage_mini.md README.md cptable.js; do
	cp $i misc/$i.utf8
	cat $i | iconv -f utf-8 -t ascii -c -s > misc/$i.ascii
	cat $i | iconv -f utf-8 -t utf-16le > misc/$i.utf16le 
	cat $i | iconv -f utf-8 -t utf-16be > misc/$i.utf16be 
	cat $i | iconv -f utf-8 -t utf-32le > misc/$i.utf32le 
	cat $i | iconv -f utf-8 -t utf-32be > misc/$i.utf32be 
	cat $i | iconv -f utf-8 -t utf-7 > misc/$i.utf7 
done
