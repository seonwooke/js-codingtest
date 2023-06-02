let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let s = Number(input[0]);
let cur = 0;
let sum = 0;

while (sum <= s) {
  cur += 1;
  sum += cur;
}

console.log(cur - 1);