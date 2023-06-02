let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let city = Number(input[0]);
let dist = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);

// cost : [5, 2, 4, 1] -> [5, 2, 2, 1]
let minCost = cost[0];
for (let i = 0 ; i < city ; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

// cost : [5, 2, 2, 1]
// dist : [2, 3, 1]
let answer = BigInt(0);
for (let i = 0 ; i < city - 1 ; i++) {
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(answer);