let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let c = Number(input[0]);

for (let i = 1 ; i <= c ; i++) {
  let arr = input[i].split(' ').map(Number);
  let n = arr[0];
  let sum = 0;
  for (let j = 1 ; j < arr.length ; j++) {
    sum += arr[j];
  }
  let avg = sum / n;
  let count = 0;
  for (let k = 1 ; k < arr.length ; k++) {
    if (avg < arr[k]) count += 1;
  }

  console.log(`${(count / n * 100).toFixed(3)}%`);
}