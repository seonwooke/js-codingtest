// Selection Sort 이용 가능
function compare (a, b) {
  return a - b;
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

mySet = new Set();
for (let i = 1 ; i <= n ; i++) {
  mySet.add(input[i]);
}
arr = Array.from(mySet).map(Number);

arr.sort(compare);
result = "";
for (let i = 0 ; i < arr.length ; i++) {
  result += arr[i] + "\n";
}

console.log(result);