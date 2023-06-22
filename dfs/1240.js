let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

let graph = [];
for (let i = 1 ; i <= n ; i++) graph[i] = [];
for (let i = 1 ; i <= n - 1 ; i++) {
  let [x, y, k] = input[i].split(' ').map(Number);
  graph[x].push([y, k]);
  graph[y].push([x, k]);
}

for (let i = 0 ; i < m ; i++) {
  let [x, y] = input[n + i].split(' ').map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0);
  console.log(distance[y]);
}

function dfs (x, dist) {
  if(visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, k] of graph[x]) dfs(y, dist + k);
}