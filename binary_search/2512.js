let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]);

// 상한액의 범위
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 상한액
  let total = 0; // 배정된 에산의 총액 계산
  for (x of arr) { // 각 지방에서 요청한 예산을 확인하며 예산 배정
    total += Math.min(mid, x);
  }

  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);