/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-is-array
 */

export default function fallbackIsArray(obj: any): boolean {
  return ('object' === typeof obj)
    && ('[object Array]' === Object.prototype.toString.call(obj));
}
