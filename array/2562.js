let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(Number);
let index = 0;
let maxValue = 0;

for (let i = 0 ; i < arr.length ; i++) {
  if (maxValue < arr[i]) {
    maxValue = arr[i];
    index = i;
  }
}

console.log(maxValue, index + 1);