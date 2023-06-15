let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let k = Number(input[0]);
let arr = input[1].split(' ').map(String);
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let visited = new Array(10).fill(false);
let selected = [];

let current = "";
let first = "";

dfs(0);
console.log(current);
console.log(first);

function dfs (depth) {
  if (depth == k + 1) {
    let check = true;
    for (let i = 0 ; i < k ; i++) {
      if (arr[i] == '<') {
        if (selected[i] > selected[i + 1]) check = false;
      } else if (arr[i] == '>') {
        if (selected[i] < selected[i + 1]) check = false;
      }
    }
    if (check) {
      current = "";
      for (let x of selected) current += x + "";
      if (first == "") first = current;
    }
    return;
  }

  for (let i = 0 ; i < numbers.length ; i++) {
    if (visited[i]) continue;
    selected.push(numbers[i]);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}