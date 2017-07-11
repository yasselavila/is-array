"use strict";
/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2016-2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/is-array
 */
Object.defineProperty(exports, "__esModule", { value: true });
function fallbackIsArray(obj) {
    return ('object' === typeof obj)
        && ('[object Array]' === Object.prototype.toString.call(obj));
}
exports.fallbackIsArray = fallbackIsArray;
exports.default = (Array.isArray || fallbackIsArray);
//# sourceMappingURL=is-array.js.map