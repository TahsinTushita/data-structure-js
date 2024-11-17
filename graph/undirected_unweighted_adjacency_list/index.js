// We create a class for the graph
class GraphUndirectedUnweighted {
  // The graph has only one property which is the adjacency list
  constructor() {
    this.adjacencyList = {};
  }

  // The addNode method takes a node value as parameter and adds it
  // as a key to the adjacencyList if it wasn't previously present
  addNode(node) {
    if (!this.adjacencyList[node]) this.adjacencyList[node] = [];
  }

  // The addConnection takes two nodes as parameters, and it adds
  // each node to the other's array of connections
  addConnection(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  // The removeConnection takes two nodes as parameters, and it removes
  // each node from the other's array of connections
  removeConnection(node1, node2) {
    this.adjacencyList[node1] = this.adjacencyList[node1].filter(
      (item) => item !== node2
    );
    this.adjacencyList[node2] = this.adjacencyList[node2].filter(
      (item) => item !== node1
    );
  }

  // The removeNode method takes a node value as parameter. It removes
  // all connections to that node present in the graph and then deletes
  // the node key from the adj list
  removeNode(node) {
    while (this.adjacencyList[node].length) {
      let adjacentNode = this.adjacencyList[node].pop();
      this.removeConnection(node, adjacentNode);
    }
    delete this.adjacencyList[node];
  }
}

const Argentina = new GraphUndirectedUnweighted();
Argentina.addNode("Buenos Aires");
Argentina.addNode("Santa fe");
Argentina.addNode("Córdoba");
Argentina.addNode("Mendoza");
Argentina.addConnection("Buenos Aires", "Córdoba");
Argentina.addConnection("Buenos Aires", "Mendoza");
Argentina.addConnection("Santa fe", "Córdoba");
Argentina.removeConnection("Santa fe", "Córdoba");
Argentina.removeNode("Buenos Aires");

console.log(Argentina);
