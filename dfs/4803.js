let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = 0;
let testCase = 1;

while (true) {
  let [n, m] = input[line].split(' ').map(Number);
  if (n == 0 && m == 0) break;
  let count = 0;
  visited = new Array(n + 1).fill(false);

  // Get graph information
  graph = [];
  for (let i = 1 ; i <= n ; i++) {
    graph[i] = [];
  }
  for (let i = 1 ; i <= m ; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  // Count the number of trees
  for (let i = 1 ; i <= n ; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) {
        count += 1;
      }
    }
  }

  // Print out
  if (count == 0) {
    console.log(`Case ${testCase}: No trees.`);
  } else if (count == 1) {
    console.log(`Case ${testCase}: There is one tree.`);
  } else {
    console.log(`Case ${testCase}: A forest of ${count} trees.`);
  }

  line += m + 1;
  testCase += 1;
}

// Check cycle in non-directional graph
function isCycle (x, previous) {
  // Change current node to true
  visited[x] = true;

  // Check the adjacent nodes one by one
  for (let y of graph[x]) {    
    if (!visited[y]) {          // If the adjacent node isn't visited      
      if (isCycle(y, x)) {      // If it's a cycle based on the adjacent node        
        return true;            // It is cycle!
      }
    } else if (y != previous) { // A node that I have visited,
      return true;              // unless it is the previous node (non-directional graph)
    }
  }
  return false;
}