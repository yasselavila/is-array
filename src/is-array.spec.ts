/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2016-2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/is-array
 */

import { expect } from 'chai';

import { default as isArray, fallbackIsArray } from './is-array';

const t1: any = new Array();
const t2: any = [];
const t3: any = [1, 2, 3];
const t4: any = {};
const t5: any = new Date();
const t6: any = /^[1-9]+$/g;

describe('isArray(): default', () => {
  it('new Array()', () => {
    expect(isArray(t1)).to.equal(true);
  });

  it('[]', () => {
    expect(isArray(t2)).to.equal(true);
  });

  it('[1, 2, 3]', () => {
    expect(isArray(t3)).to.equal(true);
  });

  it('{}', () => {
    expect(isArray(t4)).to.equal(false);
  });

  it('new Date()', () => {
    expect(isArray(t5)).to.equal(false);
  });

  it('/^[1-9]+$/g', () => {
    expect(isArray(t6)).to.equal(false);
  });
});

describe('isArray(): fallback', () => {
  it('new Array()', () => {
    expect(fallbackIsArray(t1)).to.equal(true);
  });

  it('[]', () => {
    expect(fallbackIsArray(t2)).to.equal(true);
  });

  it('[1, 2, 3]', () => {
    expect(fallbackIsArray(t3)).to.equal(true);
  });

  it('{}', () => {
    expect(fallbackIsArray(t4)).to.equal(false);
  });

  it('new Date()', () => {
    expect(fallbackIsArray(t5)).to.equal(false);
  });

  it('/^[1-9]+$/g', () => {
    expect(fallbackIsArray(t6)).to.equal(false);
  });
});
