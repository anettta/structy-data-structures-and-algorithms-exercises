// Write a function, undirectedPath,
// that takes in an array of edges for an undirected graph
// and two nodes (edges, nodeA, nodeB).
// The function should return a boolean
//  indicating whether or not there exists a path
//  between nodeA and nodeB.

// 01-11-22

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) {
    return false;
  }
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
};

const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

// 01-11-22
// const undirectedPath = (edges, nodeA, nodeB) => {
//   // need to convert edge list into an adjacency list
//   const graph = buildGraph(edges);
//   return hasPath(graph, nodeA, nodeB, new Set());
// };

// const hasPath = (graph, src, dst, visited) => {
//   if (src === dst) return true;

//   if (visited.has(src)) return false;
//   visited.add(src);

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst, visited) === true) {
//       return true;
//     }
//   }
//   return false;
// };

// const buildGraph = (edges) => {
//   let graph = {};
//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);
//   return hasPath(graph, nodeA, nodeB, new Set());
// };

// const hasPath = (graph, src, dst, visited) => {
//   if (src === dst) return true;

//   if (visited.has(src)) return false;
//   visited.add(src);

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst, visited) === true) {
//       return true;
//     }
//   }
//   return false;
// };

// const buildGraph = (edges) => {
//   const graph = {};
//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) {
//       graph[a] = [];
//     }
//     if (!(b in graph)) {
//       graph[b] = [];
//     }
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m")); // -> true
