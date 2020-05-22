# rollup-plugin-es3

[![Build Status](https://travis-ci.org/futurist/rollup-plugin-es3.svg?branch=master)](https://travis-ci.org/futurist/rollup-plugin-es3)

[Rollup](https://github.com/rollup/rollup) plugin, to make it more compatible with ES3.

Currently it's only do 2 things:

- Remove Object.defineProperty of __esModule part (rollup issue [#750](https://github.com/rollup/rollup/issues/750))
- Remove Object.freeze (issue #1)

## Install

```sh
npm i rollup-plugin-es3 -D
```

## Usage

```js
import { rollup } from 'rollup'
import es3 from 'rollup-plugin-es3'

rollup({
	entry: 'main.js',
	plugins: [
		es3()
	]
})
```

## Option

``` javascript
// pass the list of removal
	plugins: [
		es3({ remove: ['defineProperty', 'freeze'] })
	]
```
