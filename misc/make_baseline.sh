#!/bin/bash
for i in cputils.js codepage.md README.md cptable.js; do
	cp $i misc/$i.utf8
	cat $i | iconv -f utf-8 -t ascii -c -s > misc/$i.ascii
	cat $i | iconv -f utf-8 -t utf-16le > misc/$i.utf16le 
	cat $i | iconv -f utf-8 -t utf-16be > misc/$i.utf16be 
	cat $i | iconv -f utf-8 -t utf-32le > misc/$i.utf32le 
	cat $i | iconv -f utf-8 -t utf-32be > misc/$i.utf32be 
	cat $i | iconv -f utf-8 -t utf-7 > misc/$i.utf7 
done
