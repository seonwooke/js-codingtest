function compare (a, b) {
  return a - b;
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

let arr = input[1].split(' ').map(Number);
arr.sort(compare);

console.log(arr[k - 1]);