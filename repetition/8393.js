let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

n = Number(input[0]);
sum = 0;

for (let i = 1 ; i <= n ; i++) {
  sum += i;
}

console.log(sum);