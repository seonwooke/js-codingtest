let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let maxValue = arr.reduce((a, b) => Math.max(a, b));
let updated = [];

for (let i = 0 ; i < n ; i++) {
  updated.push(arr[i] / maxValue * 100);
}

console.log(updated.reduce((a, b) => (a + b)) / n);