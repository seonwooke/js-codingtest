let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let k = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);
let lines = [];
for (let i = 1 ; i <= k ; i++) {
  lines.push(Number(input[i]));
}

let start = 1;
let end = lines.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let number = 0;

  for (let i = 0 ; i < lines.length ; i++) {
    number += parseInt(lines[i] / mid); // 2 + 3 + 1 + 1
  }

  if (number >= n) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);