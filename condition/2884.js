let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

H = Number(input[0].split(" ")[0]);
M = Number(input[0].split(" ")[1]);

if (M < 45) {
  if (H < 0) H = 23;
  H -= 1;
  M += 15;
} else {
  M -= 45;
}

console.log(H + " " + M);
