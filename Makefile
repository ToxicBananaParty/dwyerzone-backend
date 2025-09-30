SHELL=/bin/bash
MODE?=debug

format-staged:
	npx lint-staged

format:
	npm run format

lint:
	npm run lint

build:
	npm run build
