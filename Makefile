SHELL=/bin/bash
MODE?=debug

format-staged:
	npx lint-staged

format:
	npm run format

lint:
	npm run lint

build-deps:
	npm run build-deps

build: build-deps
	npm run build

start-roy start-colonel-roy roy: build
	node ./packages/colonel-roy/dist/index.js

start-solid-snake start-snake snake: build
	node ./packages/solid-snake/dist/index.js

start-big-boss big-boss: build
	node ./packages/big-boss/dist/index.js