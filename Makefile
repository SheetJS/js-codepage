SHELL=/bin/bash
VOC=voc
TARGET=cptable.js
AUXTARGETS=cputils.js cpexcel.js sbcs.js
DISTFULL=cpexcel sbcs cptable
CMDS=bin/codepage.njs

ULIB=$(shell echo $(LIB) | tr a-z A-Z)

## Main Targets

.PHONY: all
all: voc ## Build library and auxiliary scripts

.PHONY: voc
voc test.js: codepage.md
	$(VOC) codepage.md

.PHONY: js
js: make.sh codepage.md ## Build all output targets
	bash make.sh <(awk -F, '$$3=="1"' pages.csv) sbcs.js cptable
	bash make.sh excel.csv cpexcel.js cptable
	bash make.sh
	make cputils.js

cputils.js: cputils.flow.js
	node -e 'process.stdout.write(require("fs").readFileSync("$<","utf8").replace(/^[ \t]*\/\*[:#][^*]*\*\/[ \t]*(\n)?/gm,"").replace(/\/\*[:#][^*]*\*\//gm,""))' > $@

.PHONY: clean
clean: ## Remove targets and build artifaats
	rm -f make.sh .vocrc pages.csv bits/*.js

.PHONY: dist
dist: $(TARGET) $(AUXTARGETS) ## Copy files for distribution
	cp $(TARGET) $(AUXTARGETS) LICENSE dist/
	for i in $(DISTFULL); do cat $$i.js cputils.js > dist/$$i.full.js; done

## Testing

.PHONY: test mocha
test mocha: test.js $(TARGET) baseline ## Run test suite
	mocha -R spec -t 20000

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

.PHONY: lint
lint: $(TARGET) $(AUXTARGETS) ## Run jshint and jscs checks
	@jshint --show-non-errors $(TARGET) $(AUXTARGETS)
	@jshint --show-non-errors $(CMDS)
	@jshint --show-non-errors package.json
	@jshint --show-non-errors --extract=always $(HTMLLINT)
	@jscs $(TARGET) $(AUXTARGETS)

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
