let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0]; // 123
let b = input[1]; // 456

b_1 = b[2];
b_2 = b[1];
b_3 = b[0];

console.log(Number(a) * Number(b_1));
console.log(Number(a) * Number(b_2));
console.log(Number(a) * Number(b_3));
console.log(Number(a) * Number(b));