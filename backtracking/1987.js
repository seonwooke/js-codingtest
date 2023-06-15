let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let r = Number(input[0].split(' ')[0]);
let c = Number(input[0].split(' ')[1]);
let arr = [];
for (let i = 1 ; i <= r ; i++) {
  arr.push(input[i]);
}

let dx = [-1, 1, 0, 0]; // 상하
let dy = [0, 0, -1, 1]; // 좌우
let visited = new Set();
let maxDepth = 0;

visited.add(arr[0][0]);
dfs(1, 0, 0);
console.log(maxDepth);

function dfs (depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0 ; i < 4 ; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
      continue; // 맵을 벗어나는 경우 무시
    }
    if (visited.has(arr[nx][ny])) {
      continue;
    }
    visited.add(arr[nx][ny]);
    dfs(depth + 1, nx, ny);
    visited.delete(arr[nx][ny]);
  }
}