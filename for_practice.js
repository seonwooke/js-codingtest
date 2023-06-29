let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [m, n] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
}

console.log(graph);

// COMMIT 4