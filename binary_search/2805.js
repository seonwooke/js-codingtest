let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let trees = input[1].split(' ').map(Number);

let start = 1;
let end = trees.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 절단기 높이
  let len = 0;

  for (let i = 0 ; i < trees.length ; i++) { // 잘린 나무가지들의 높이
    if (trees[i] > mid) {
      len += trees[i] - mid;
    }
  }

  if (len >= m) { // 잘린 나무가 필요한 길이와 같거나 긴 경유
    result = mid;
    start = mid + 1;
  } else { // 잘린 나무가 필요한 길이보다 작은 경우
    end = mid - 1;
  }
}

console.log(result);