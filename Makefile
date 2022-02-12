SHELL=/bin/bash
LIB=codepage
VOC=voc
TARGET=cptable.js
AUXTARGETS=cputils.js cpexcel.js sbcs.js
DISTFULL_A=cpexcel sbcs
DISTFULL_B=cptable
DISTFULL_M=cpexcel
CMDS=
#DISTBITS=iso2022.js
DISTBITS=

ULIB=$(shell echo $(LIB) | tr a-z A-Z)
FLOWTARGET=cptable.js
CLOSURE=/usr/local/lib/node_modules/google-closure-compiler/compiler.jar

## Main Targets

.PHONY: all
all: voc ## Build library and auxiliary scripts

.PHONY: voc
voc: codepage.md
	@make js
	#$(VOC) codepage.md

.PHONY: js
js: make.sh codepage.md ## Build all output targets
	bash make.sh <(awk -F, '$$3=="1"' pages.csv) sbcs.js cptable
	bash make.sh excel.csv cpexcel.js cptable
	bash make.sh pages.csv cptable.js cptable
	bash make_esm.sh excel.csv cpexcel.mjs
	#node iso2022/make_iso2022.njs > iso2022.js
	make cputils.js

cputils.js: cputils.flow.js
	node -e 'process.stdout.write(require("fs").readFileSync("$<","utf8").replace(/^[ \t]*\/\*[:#][^*]*\*\/[ \t]*(\n)?/gm,"").replace(/\/\*[:#][^*]*\*\//gm,""))' > $@

.PHONY: clean
clean: ## Remove targets and build artifacts
	rm -f bits/*.js

.PHONY: dist
dist: $(TARGET) $(AUXTARGETS) ## Copy files for distribution
	cp $(TARGET) $(AUXTARGETS) LICENSE dist/
	for i in $(DISTFULL_A); do cat $$i.js cputils.js | sed "s#require('./cptable')#cptable#" > dist/$$i.full.js; done
	for i in $(DISTFULL_B); do cat $$i.js $(DISTBITS) cputils.js | sed "s#require('./cptable')#cptable#" > dist/$$i.full.js; done
	for i in $(DISTFULL_M); do cat $$i.mjs cputils.mjs | sed "s#require('./cptable')#cptable#" > dist/$$i.full.mjs; done

## Testing

.PHONY: test mocha
test mocha: $(TARGET) baseline ## Run test suite
	./node_modules/.bin/mocha -R spec -t 20000

.PHONY: ctest
ctest: ## Build browser test (into ctest/ subdirectory)
	bash ctest/fixtures.sh

.PHONY: ctestserv
ctestserv: ## Start a test server on port 8000
	@cd ctest && python -mSimpleHTTPServer

.PHONY: baseline
baseline: ## Build test baselines
	@bash ./misc/make_baseline.sh

.PHONY: clean-baseline
clean-baseline: ## Remove test baselines
	@bash ./misc/make_baseline.sh clean

## Code Checking

.PHONY: fullint
fullint: lint old-lint tslint flow mdlint ## Run all checks

.PHONY: lint
lint: $(TARGET) $(AUXTARGETS) ## Run eslint checks
	@eslint --ext .js,.njs,.json,.html,.htm $(TARGET) $(AUXTARGETS) $(CMDS) $(HTMLLINT) package.json
	if [ -e $(CLOSURE) ]; then java -jar $(CLOSURE) $(REQS) $(FLOWTARGET) --jscomp_warning=reportUnknownTypes >/dev/null; fi

.PHONY: old-lint
old-lint: $(TARGET) $(AUXTARGETS) ## Run jshint and jscs checks
	@jshint --show-non-errors $(TARGET) $(AUXTARGETS)
	@jshint --show-non-errors $(CMDS)
	@jshint --show-non-errors package.json
	@jshint --show-non-errors --extract=always $(HTMLLINT)
	@jscs $(TARGET) $(AUXTARGETS)
	if [ -e $(CLOSURE) ]; then java -jar $(CLOSURE) $(REQS) $(FLOWTARGET) --jscomp_warning=reportUnknownTypes >/dev/null; fi

.PHONY: tslint
tslint: $(TARGET) ## Run typescript checks
	#@npm install dtslint typescript
	#@npm run-script dtslint
	dtslint types

.PHONY: flow
flow: lint ## Run flow checker
	@flow check --all --show-all-errors

.PHONY: cov
cov: misc/coverage.html ## Run coverage test

misc/coverage.html: $(TARGET) test.js
	mocha --require blanket -R html-cov -t 20000 > $@

.PHONY: coveralls
coveralls: ## Coverage Test + Send to coveralls.io
	mocha --require blanket --reporter mocha-lcov-reporter -t 20000 | node ./node_modules/coveralls/bin/coveralls.js

MDLINT=README.md codepage.md
.PHONY: mdlint
mdlint: $(MDLINT) ## Check markdown documents
	alex $^
	mdspell -a -n -x -r --en-us $^

.PHONY: prof
prof:
	cat misc/prof.js test.js > prof.js
	node --prof prof.js


.PHONY: help
help:
	@grep -hE '(^[a-zA-Z_-][ a-zA-Z_-]*:.*?|^#[#*])' $(MAKEFILE_LIST) | bash misc/help.sh

#* To show a spinner, append "-spin" to any target e.g. cov-spin
%-spin:
	@make $* & bash misc/spin.sh $$!
