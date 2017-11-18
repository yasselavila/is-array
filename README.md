@yag/is-array
=====

[![License](https://img.shields.io/badge/license-BSD%203--Clause-green.svg?style=flat-square)](https://raw.githubusercontent.com/yasselavila/is-array/master/LICENSE.txt)
[![GitHub tag](https://img.shields.io/github/tag/yasselavila/is-array.svg?style=flat-square)](https://github.com/yasselavila/is-array/releases)
[![Travis](https://img.shields.io/travis/yasselavila/is-array.svg?style=flat-square)](https://travis-ci.org/yasselavila/is-array)

Copyright (c) 2017, [Yassel Avila Gil](http://yasselavila.com).
See [LICENSE](./LICENSE.txt) (BSD 3-Clause).

## Documentation

### What is this?

Just a fallback for Array.isArray()

### Installation

`@yag/is-array` is available for [Node.js](http://npmjs.org) on [npm](http://npmjs.org). To install it, type:

    $ npm install --save @yag/is-array

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
<!-- ~500 bytes gzipped / ~430 bytes if you use Brotli ;-) -->
<script src="/node_modules/@yag/is-array/bundles/isarray.umd.bundle.js"></script>
<script>

  var t1 = [1, 2, 3];
  var t2 = new Date();

  console.log(isArray(t1)); // true
  console.log(isArray(t2)); // false

</script>
```
