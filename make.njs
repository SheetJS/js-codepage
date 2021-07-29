#!/usr/bin/env node
var argv = process.argv.slice(1), fs = require('fs');
if(argv.length < 2) {
    console.error("usage: make.njs <codepage_index> [variable]");
    process.exit(22); /* EINVAL */
}

var cp/*:string*/ = argv[1];
var jsvar/*:string*/ = argv[2] || "cptable";
var x/*:string*/ = fs.readFileSync("codepages/" + cp + ".TBL","utf8");
var maxcp = 0, i = 0, ii = 0;

var y/*:Array<Array<number> >*/ = x.split("\n").map(function(z/*:string*/)/*:Array<number>*/ {
    var w/*:Array<string>*/ = z.split("\t");
    if(w.length < 2) return [Number(w[0])];
    return [Number(w[0]), Number(w[1])];
}).filter(function(z) { return z.length > 1; });
for(i = 0; i != y.length; ++i) if(y[i][0] > maxcp) maxcp = y[i][0];

var enc/*:{[key:string]:number}*/ = {}, dec/*:{[key:string]:string}|Array<string>*/ = (maxcp < 256 ? [] : {});
for(i = 0; i != y.length; ++i) {
    /*:: if(Array.isArray(dec)) */ dec[y[i][0]] = String.fromCharCode(y[i][1]);
    enc[String.fromCharCode(y[i][1])] = y[i][0];
}

var odec = "", outstr = "";
if(maxcp < 256) {
  /*:: if(Array.isArray(dec)) { */
    for(i = 0; i != 256; ++i) if(typeof dec[i] === "undefined") dec[i] = String.fromCharCode(0xFFFD);
    odec = JSON.stringify(dec.join(""));
    outstr = '(function(){ var d = ' + odec + ', D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d.charAt(i)] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();';
  /*:: } */
} else {
    var dd = [];
    /*:: if(!Array.isArray(dec)) { */
    for(i in dec) if(dec.hasOwnProperty(i)) {
        ii = +i;
        if(typeof dd[ii >> 8] === "undefined") dd[ii >> 8] = [];
        dd[ii >> 8][ii % 256] = dec[i];
    }
    /*:: } */
    outstr = '(function(){ var d = [], e = {}, D = [], j;\n';
    for(var i = 0; i != 256; ++i) if(dd[i]) {
        for(var j = 0; j != 256; ++j) if(typeof dd[i][j] === "undefined") dd[i][j] = String.fromCharCode(0xFFFD);
        outstr += 'D[' + i + '] = ' + JSON.stringify(dd[i].join("")) + '.split("");\n';
        outstr += 'for(j = 0; j != D[' + i + '].length; ++j) if(D[' + i + '][j].charCodeAt(0) !== 0xFFFD) { e[D[' + i + '][j]] = ' + (i*256) + ' + j; d[' + (i*256) + ' + j] = D[' + i + '][j];}\n'
    }
    outstr += 'return {"enc": e, "dec": d }; })();';
}
process.stdout.write(jsvar + "[" + cp + "] = " + outstr + "\n");

