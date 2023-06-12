let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = Array.from({ length: n }, (value, index) => (index + 1));

let visited = new Array(n).fill(false);
let selected = [];

let answer = "";
function dfs (arr, depth) {
  if (depth == n) {
    let result = [];
    for (let i of selected) {
      result.push(arr[i]);
    }
    for (let x of result) {
      answer += x + " ";
    }
    answer += "\n";
    return;
  }
  for (let i = 0 ; i < arr.length ; i++) {
    if (visited[i]) {
      continue;
    }
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);