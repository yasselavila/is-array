/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2017 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-is-array
 */

const path = require('path');
const fs = require('fs');
const process = require('process');

const pkgJsonContent = fs.readFileSync(
  path.resolve(__dirname, '..', 'package.json')
);

const pkgJson = JSON.parse(pkgJsonContent);

const json = {
  "name": pkgJson.name,
  "description": pkgJson.description,
  "version": pkgJson.version,
  "license": pkgJson.license,
  "engines": pkgJson.engines,
  "homepage": pkgJson.homepage,
  "author": pkgJson.author,
  "repository": pkgJson.repository,
  "keyworks": pkgJson.keyworks,
  "main": "index.js",
  "typings": "index.d.ts"
};

const jsonStr = JSON.stringify(json, null, 2) + "\n";

fs.writeFileSync(
  path.resolve(__dirname, '..', 'dist', 'package.json'),
  jsonStr
);
