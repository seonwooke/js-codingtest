let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = Number(input[0]);

function grading (n) {
  if (90 <= n && n <= 100) {
    console.log('A');
  } else if (80 <= n && n <= 89) {
    console.log('B');
  } else if (70 <= n && n <= 79) {
    console.log('C');
  } else if (60 <= n && n <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
}

grading(data);