let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
insertionSort(arr);
let endTime = new Date().getTime();

console.log('삽입 정렬 소요 시간: ', endTime - startTime, "ms.");

function insertionSort(arr) {
  for (let i = 1 ; i < arr.length ; i++) {
    for (let j = i ; j > 0 ; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}