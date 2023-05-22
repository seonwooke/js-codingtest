let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for (let i = 1 ; i <= testCase ; i++) {
  let [n , s] = input[i].split(' ');
  let result = "";

  for (let j = 0 ; j <= s.length ; j++) {
    result += s.charAt(j).repeat(n);
  }
  console.log(result);
}