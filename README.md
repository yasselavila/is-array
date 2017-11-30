@yag/is-array
=====

[![License](https://img.shields.io/badge/license-BSD%203--Clause-green.svg?style=flat-square)](https://raw.githubusercontent.com/yasselavila/js-is-array/master/LICENSE.txt)
[![GitHub tag](https://img.shields.io/github/tag/yasselavila/js-is-array.svg?style=flat-square)](https://github.com/yasselavila/js-is-array/releases)
[![npm version](http://img.shields.io/npm/v/@yag/is-array.svg?style=flat-square)](https://npmjs.org/package/@yag/is-array)
[![Build Status](https://img.shields.io/travis/yasselavila/js-is-array.svg?style=flat-square)](https://travis-ci.org/yasselavila/js-is-array)
[![Coverage Status](https://coveralls.io/repos/yasselavila/js-is-array/badge.svg?branch=master)](https://coveralls.io/r/yasselavila/js-is-array?branch=master)
[![Dependencies Status](https://david-dm.org/yasselavila/js-is-array.svg?style=flat-square)](https://david-dm.org/yasselavila/js-is-array)
[![Known Vulnerabilities](https://snyk.io/test/github/yasselavila/js-is-array/badge.svg)](https://snyk.io/test/github/yasselavila/js-is-array)

Copyright (c) 2017, [Yassel Avila Gil](http://yasselavila.com).

### What is this?

Just a fallback for [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

### License

New BSD License. See [LICENSE.txt](./LICENSE.txt).

## Documentation

> This library includes type definitions, we :heart: **TypeScript**.

### Installation

`@yag/is-array` is available for [Node.js](http://npmjs.org) on [npm](http://npmjs.org). To install it, type:

```bash
npm install -P @yag/is-array
```

If you need support for older browsers, check **usage**.

### Usage

###### TypeScript:
```ts
import isArray from '@yag/is-array';

const t1: any = [1, 2, 3];
const t2: any = new Date();

console.log(isArray(t1)); // true
console.log(isArray(t2)); // false
```

###### ES6+:
```js
const { isArray } = require('@yag/is-array');

const t1 = [1, 2, 3];
const t2 = new Date();

console.log(isArray(t1)); // true
console.log(isArray(t2)); // false
```

###### JavaScript (ES3, ES5):
```js
var isArray = require('@yag/is-array').isArray;

var t1 = [1, 2, 3];
var t2 = new Date();

console.log(isArray(t1)); // true
console.log(isArray(t2)); // false
```

###### Directly in (*legacy?*) browsers:
```html
<!-- ~500 bytes gzipped / ~420 bytes if you use Brotli ;-) -->
<script src="/node_modules/@yag/is-array/bundles/isarray.umd.bundle.js"></script>
<script>

  var t1 = [1, 2, 3];
  var t2 = new Date();

  console.log(isArray(t1)); // true
  console.log(isArray(t2)); // false

</script>
```
