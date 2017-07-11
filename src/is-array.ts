/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2016-2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/is-array
 */

export function fallbackIsArray(obj: any): boolean {
  return ('object' === typeof obj)
    && ('[object Array]' === Object.prototype.toString.call(obj));
}

export default (Array.isArray || fallbackIsArray);
