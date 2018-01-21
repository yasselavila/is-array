var isArray = require('../dist').isArray;

var t1 = [1, 2, 3];
var t2 = new Date();

console.log( t1, isArray(t1) ); // true
console.log( t2, isArray(t2) ); // false
