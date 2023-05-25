let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = [...input[0]].map(Number);

function compare (a, b) {
  return b - a;
}
arr.sort(compare);

let result = "";
for (let x of arr) {
  result += x;
}

console.log(result);