let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let cards = input[1].split(' ').map(Number);
let m = Number(input[2]);
let data = input[3].split(' ').map(Number);

function compare (a, b) {
  return a - b;
}

cards.sort(compare);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

function countByRange (arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  
  return rightIndex - leftIndex;
}

let result = [];
for (let i = 0 ; i < m ; i++) {
  result += countByRange(cards, data[i], data[i]) + ' ';
}

console.log(result);