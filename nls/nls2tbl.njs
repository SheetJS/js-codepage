#!/usr/bin/env node
/* js-codepage (C) 2014 SheetJS -- http://sheetjs.com */
/* vim: set ts=2 ft=javascript: */
/* nls2tbl: read windows NLS (c:\windows\system32\C_<cp>.NLS files, make TBL */
var fs = require('fs');
var C = fs.readFileSync(process.argv[2]);

function hex(c, l) {
	var o = c.toString(16).toUpperCase();
	var p = "";
	if(o.length < l) p = new Array(l+1-o.length).join("0");
	return "0x" + p + o
}

var i = 28;
var seen = [];
for(var k=0; k!=256; ++k) {
	var j = C.readUInt16LE(i+2*k);
	console.log(hex(k,2) + "\t" + hex(j, 4));
	seen[j] = true;
}
