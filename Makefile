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

start-roy start-colonel-roy roy:
	npm run -w @smarthome/colonel-roy dev

start-solid-snake start-snake snake:
	npm run -w @smarthome/solid-snake dev

start-big-boss big-boss:
	npm run -w @smarthome/big-boss dev