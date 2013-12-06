var fs = require('fs'), vm = require('vm');
var cptable, sbcs;
describe('source', function() {
    it('should load node', function() { cptable = require('./'); }); 
    it('should load sbcs', function() { sbcs = require('./sbcs'); }); 
    it('should process bits', function() {
        var files = fs.readdirSync('bits').filter(function(x){return x.substr(-3)==".js";});
        files.forEach(function(x) {
            vm.runInThisContext(fs.readFileSync('./bits/' + x));
        });
    });
});
describe('consistency', function() {
    cptable = require('./');
    Object.keys(cptable).filter(function(w) { return w != "utils"; }).forEach(function(x) {
        it('should consistently process CP ' + x, function() {
            var cp = cptable[x];
            Object.keys(cp.dec).forEach(function(d) {
                if(cp.enc[cp.dec[d]] != d) {
                    if(typeof cp.enc[cp.dec[d]] !== "undefined") return;
                    if(cp.dec[d].charCodeAt(0) == 0xFFFD) return;
                    if(cp.dec[cp.enc[cp.dec[d]]] === cp.dec[d]) return; 
                    throw x + " e.d[" + d + "] = " + cp.enc[cp.dec[d]] + "; d[" + d + "]=" + cp.dec[d] + "; d.e.d[" + d + "] = " + cp.dec[cp.enc[cp.dec[d]]]; 
                }
            });
            Object.keys(cp.enc).forEach(function(e) {
                if(cp.dec[cp.enc[e]] != e) {
                    throw x + " d.e[" + e + "] = " + cp.dec[cp.enc[e]] + "; e[" + e + "]=" + cp.enc[e] + "; e.d.e[" + e + "] = " + cp.enc[cp.dec[cp.enc[e]]]; 
                }
            });
        });
    });
});
function testfile(f,cp,type) {
    var d = fs.readFileSync(f);
    var x = fs.readFileSync(f, type);
    var y = cptable.utils.decode(65001, d);
    if(x !== y) throw "" + x + "!=" + y;
    var z = cptable.utils.encode(65001,x);
    if(z.length != d.length) throw "" + JSON.stringify(z) + " != " + JSON.stringify(d);
    for(var i = 0; i != d.length; ++i) if(d[i] !== z[i]) throw "" + i + " " + d[i] + "!=" + z[i];
}
describe('utf8', function() {
    cptable = require('./');
    ['codepage.md','README.md','cptable.js','cputils.js'].forEach(function(f) {
        it('should process ' + f, function() { testfile(f,65001,'utf-8'); });
    });
    it('should process bits', function() {
        var files = fs.readdirSync('bits').filter(function(x){return x.substr(-3)==".js";});
        files.forEach(function(f) { testfile('./bits/' + f,65001,'utf-8'); }); 
    });
});
var m = cptable.utils.magic;
Object.keys(m).forEach(function(t){describe(m[t], function() {
    it("should process base." + m[t], fs.existsSync('./test_files/base.' + m[t]) ?
        function() { testfile('./test_files/base.' + m[t], t, m[t]); }
    : null);
});})
