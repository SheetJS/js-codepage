#!/usr/bin/env node
/* js-codepage (C) 2014 SheetJS -- http://sheetjs.com */
/* vim: set ts=2 ft=javascript: */
var codepage = require('../');
var fs = require('fs'), program = require('commander');
program
	.version('1.0.0')
	.usage('[options] <file>')
	.option('-f, --from-code <code>', 'codepage of input (default 65001 utf8)')
	.option('-t, --to-code <code>', 'codepage of output (default 65001 utf8)')
	.option('-o, --output <file>', 'output file (<file>.<to> if specified)')
	.option('-l, --list', 'List supported codepages');

program.on('--help', function() {
	console.log('  Codepage descriptions can be found in the README');
	console.log('      http://oss.sheetjs.com/js-codepage/README.md');
	console.log('  Support email: dev.codepage@sheetjs.com');
});

program.parse(process.argv);

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
if(o) fs.writeFileSync(o, codepage.utils.encode(to, dec));
else if(!program.toCode) console.log(dec.toString('utf8'));
else fs.writeFileSync(f + "." + to, codepage.utils.encode(to, dec));
