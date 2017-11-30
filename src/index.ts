/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-is-array
 */

import fallbackIsArray from './fallback-is-array';

const isArray: (obj: any) => boolean = Array.isArray || fallbackIsArray;

export {
  fallbackIsArray,
  isArray
};

export default isArray;
