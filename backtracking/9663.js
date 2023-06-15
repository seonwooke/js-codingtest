let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let queens = [];
let count = 0;

dfs(0);
console.log(count);

function possible (x, y) {
  for (let [a, b] of queens) {
    if (a == x || b == y) { // 행이나 열이 같은지 확인
      return false;
    }
    if (Math.abs(a - x) == Math.abs(b - y)) { // 대각선 위치 여부 확인
      return false;
    }
  }

  return true;
}

function dfs (row) {
  if (row == n) {
    count += 1;
  }

  for (let i = 0 ; i < n ; i ++) {
    if (!possible(row, i)) {
      continue;
    }
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}