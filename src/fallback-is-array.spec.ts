/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2017 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-is-array
 */

import { expect } from 'chai';

import fallbackIsArray from './fallback-is-array';

describe('fallbackIsArray()', () => {
  const mock1: any = new Array();
  const mock2: any = [];
  const mock3: any = [1, 2, 3];
  const mock4: any = {};
  const mock5: any = new Date();
  const mock6: any = /^[1-9]+$/g;

  it('new Array(): true', () => {
    expect(fallbackIsArray(mock1)).to.equal(true);
  });

  it('[]: true', () => {
    expect(fallbackIsArray(mock2)).to.equal(true);
  });

  it('[1, 2, 3]: true', () => {
    expect(fallbackIsArray(mock3)).to.equal(true);
  });

  it('{}: false', () => {
    expect(fallbackIsArray(mock4)).to.equal(false);
  });

  it('new Date(): false', () => {
    expect(fallbackIsArray(mock5)).to.equal(false);
  });

  it('/^[1-9]+$/g: false', () => {
    expect(fallbackIsArray(mock6)).to.equal(false);
  });
});
