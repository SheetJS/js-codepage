#!/usr/bin/env node
/* js-codepage (C) 2014 SheetJS -- http://sheetjs.com */
/* vim: set ts=2 ft=javascript: */
var codepage = require('../');
var fs = require('fs'), program = require('commander');
program
	.version(codepage.version)
	.usage('[options] <file>')
	.option('-f, --from-code <code>', 'codepage of input (default 65001 utf8)')
	.option('-t, --to-code <code>', 'codepage of output (default 65001 utf8)')
	.option('-o, --output <file>', 'output file (<file>.<to> if specified)')
	.option('-B, --bom', 'write BOM (for unicode codepages)')
	.option('-l, --list', 'List supported codepages');

program.on('--help', function() {
	console.log('  Codepage descriptions can be found in the README');
	console.log('      http://oss.sheetjs.com/js-codepage/README.md');
	console.log('  Support email: dev.codepage@sheetjs.com');
});

program.parse(process.argv);

if(program.list) {
	Object.keys(codepage).forEach(function(x) { if(+x == x) console.log(x); });
	process.exit();
}

if(!fs.existsSync(program.args[0])) {
	console.error('codepage: must specify a filename');
	process.exit(13);
}

var fr = program.fromCode || 65001;
var to = program.toCode || 65001;
var f = program.args[0];
var o = program.output;
var text = fs.readFileSync(f);
var dec = codepage.utils.decode(fr, text);

var bom = {
	1200:  new Buffer([0xFF, 0xFE]),
	1201:  new Buffer([0xFE, 0xFF]),
	12000: new Buffer([0xFF, 0xFE, 0x00, 0x00]),
	12001: new Buffer([0x00, 0x00, 0xFE, 0xFF]),
	16969: new Buffer([0x69, 0x69]),
	65000: new Buffer([0x2B, 0x2F, 0x76, 0x2B]),
	65001: new Buffer([0xEF, 0xBB, 0xBF])
}

if(!program.toCode && !o) console.log(dec.toString('utf8'));
else if(!program.bom || !bom[fr]) fs.writeFileSync(o || (f + "." + to), codepage.utils.encode(to, dec));
else {
	fs.writeFileSync(o || (f + "." + to), bom[fr]);
	fs.appendFileSync(o || (f + "." + to), codepage.utils.encode(to, dec));
}
