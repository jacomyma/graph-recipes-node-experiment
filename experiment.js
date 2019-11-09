const Graph = require('graphology');

const graph = new Graph();
graph.addNode('John');
graph.addNode('Martha');
graph.addEdge('John', 'Martha');

console.log('Number of nodes', graph.order);
console.log('Number of edges', graph.size);

graph.forEachNode(node => {
  graph.forEachNeighbor(node, neighbor => console.log(node, neighbor));
});
