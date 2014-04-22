SHELL=/bin/bash
VOC=voc
TARGETS=cptable.js cputils.js cpexcel.js sbcs.js

.PHONY: js voc
voc test.js: codepage.md
	$(VOC) codepage.md

js: make.sh codepage.md
	bash make.sh <(awk -F, '$$3=="1"' pages.csv) sbcs.js cptable
	bash make.sh excel.csv cpexcel.js cptable
	bash make.sh

.PHONY: init
init:
	bash misc/init.sh

.PHONY: clean
clean:
	rm -f make.sh .vocrc *.csv bits/*.js

.PHONY: test mocha
test mocha: test.js
	mocha -R spec

.PHONY: lint
lint:
	jshint --show-non-errors $(TARGETS)

.PHONY: cov cov-spin
cov: misc/coverage.html
cov-spin:
	make cov & bash misc/spin.sh $$!

misc/coverage.html: test.js
	mocha --require blanket -R html-cov > $@

.PHONY: coveralls coveralls-spin
coveralls:
	mocha --require blanket --reporter mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js

coveralls-spin:
	make coveralls & bash misc/spin.sh $$!

.PHONY: dist
dist: dist/cpexcel.full.js dist/cptable.full.js dist/sbcs.full.js
	cp $(TARGETS) dist/
	cp LICENSE dist/

.PHONY: dist/cpexcel.full.js dist/cptable.full.js dist/sbcs.full.js
dist/cpexcel.full.js dist/cptable.full.js dist/sbcs.full.js : dist/%.full.js: %.js cputils.js
	cat $^ > $@
