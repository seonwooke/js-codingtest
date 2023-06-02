let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = [];

for (let i = 1 ; i <= n ; i++) {
  data.push(input[i].split(' ').map(Number));
}

data.sort(function (a, b) {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let count = 1;
let curr = 0;
for (let i = 1 ; i < n ; i++) {
  if (data[curr][1] <= data[i][0]) {
    curr = i;
    count += 1;
  }
}

console.log(count);