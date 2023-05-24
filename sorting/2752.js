function compare(a, b) {
  return a - b;
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

arr = input[0].split(' ').map(Number);

arr.sort(compare);

result = "";

for (let i = 0 ; i < arr.length ; i++) {
  result += arr[i] + " ";
}

console.log(result);