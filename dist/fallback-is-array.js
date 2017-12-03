"use strict";
/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-is-array
 */
Object.defineProperty(exports, "__esModule", { value: true });
function fallbackIsArray(obj) {
    return ('object' === typeof obj)
        && ('[object Array]' === Object.prototype.toString.call(obj));
}
exports.default = fallbackIsArray;
//# sourceMappingURL=fallback-is-array.js.map