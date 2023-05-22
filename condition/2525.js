let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

H = Number(input[0].split(" ")[0]);
M = Number(input[0].split(" ")[1]);
C = Number(input[1]);

let totalMinute = H * 60 + M + C;
totalMinute %= 1440;
H = parseInt(totalMinute / 60);
M = totalMinute % 60;

console.log(H + " " + M);