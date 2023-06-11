let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let numbers = Array.from({length : n}, (value, index) => (index + 1));

let visited = new Array(n).fill(false); // 각 원소 인덱스(index)별 방문 여부
let selected = []; // 현재 순열에 포함된 원소(element)의 인덱스

let answer = "";
function dfs (arr, depth) {
  if (depth == m) { // 모든 순열을 확인하는 부분
    let result = []; // 순열 결과 저장 테이블
    for (let i of selected) {
      result.push(arr[i]);
    }
    for (let x of result) {
      answer += x + " "; // 계산된 순열을 실직적으로 처리하는 부분
    }
    answer += "\n";
    return;
  }
  for (let i = 0 ; i < arr.length ; i++) { // 하나씩 원소 인덱스를 확인하며
    if (visited[i]) {
      continue; // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
    }
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1); // 재귀 함수 호출
    selected.pop(); // 현재 원소 선택 취소
    visited[i] = false; // 현재 원소 방문 처리 취소
  }
}

dfs(numbers, 0);
console.log(answer);