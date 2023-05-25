let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1 ; i <= n ; i++) {
  let [age, name] = input[i].split(' ');
  arr.push([Number(age), name]);
}

function compare (a, b) {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a;
  }
}

arr.sort(compare);

let result = "";
for (let people of arr) {
  result += people[0] + " " + people[1] + "\n";
}

console.log(result);