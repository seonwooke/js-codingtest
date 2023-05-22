let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str = input[1];
let sum = 0;

for (let n of str) {
  sum += Number(n);
}

console.log(sum);