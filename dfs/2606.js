let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let edges = Number(input[1]);

let mySet = new Set();
for (let i = 2 ; i <= edges + 1 ; i++) {
  mySet.add(input[i].split(' ')[0]);
  mySet.add(input[i].split(' ')[1]);
}
let arr = Array.from(mySet);

console.log(arr);