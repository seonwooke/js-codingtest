let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// [2, 4, -10, 4, -9]
let arr = input[1].split(' ').map(Number);

// [2, 4, -10, -9] -> [-10, -9, 2, 4]
let uniqueArray = [... new Set(arr)];
uniqueArray.sort((a, b) => a - b);

// [-10 : 0, -9 : 1, 2 : 2, 4: 3]
let myMap = new Map();
for (let i = 0 ; i < uniqueArray.length ; i++) {
  myMap.set(uniqueArray[i], i);
}

result = "";
for (x of arr) {
  result += myMap.get(x) + " ";
}

// [2, 3, 0, 3, 1]
console.log(result);