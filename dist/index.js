"use strict";
/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2017 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-is-array
 */
Object.defineProperty(exports, "__esModule", { value: true });
var fallback_is_array_1 = require("./fallback-is-array");
exports.fallbackIsArray = fallback_is_array_1.default;
var isArray = Array.isArray || fallback_is_array_1.default;
exports.isArray = isArray;
exports.default = isArray;
//# sourceMappingURL=index.js.map