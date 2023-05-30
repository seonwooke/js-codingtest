let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

function compare (a, b) {
  return a - b;
}
arr.sort(compare);

let answer = 0;
let summary = 0;
// 1, 2, 3, 3, 4
for (let i = 0 ; i < n ; i++) {
  summary += arr[i]; // summary = 1, 3, 6, 9, 13
  answer += summary; // answer = 1, 4, 10, 19, 32
}

console.log(answer);