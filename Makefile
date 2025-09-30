SHELL=/bin/bash
MODE?=debug

format-staged:
	npx lint-staged

lint:
	npm run lint

build:
	npm run build