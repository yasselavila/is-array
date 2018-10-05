const { isArray } = require('../dist');

const t1 = [1, 2, 3];
const t2 = new Date();

console.log(t1, isArray(t1)); // true
console.log(t2, isArray(t2)); // false
