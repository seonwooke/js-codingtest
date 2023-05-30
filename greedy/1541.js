let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 뺄셈(-) 연산자를 기준으로 나누어 여러 그룹 만들기
let groups = input[0].split('-');
let answer = 0;

console.log(groups);

// input : 90+30-20+50-30+60-70+30+20 
// group : (90+30)-(20+50)-(30+70)-(70+30+20)
for (let i = 0 ; i < groups.length ; i++) {
  // 120, 70, 90, 12
  let cur = groups[i].split('+').map(Number).reduce((a, b) => a + b);
  if (i == 0) {
    // 문자의 시작은 무조건 숫자이기 때문에 +
    answer += cur;
  } else {
    // 두 번째 그룹부터는 -을 기준으로 나눴기 때문에 무조건 -
    answer -= cur;
  }
}

console.log(answer);