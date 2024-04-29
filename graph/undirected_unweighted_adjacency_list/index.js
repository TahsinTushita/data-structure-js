class GraphUndirectedUnweighted {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    if (!this.adjacencyList[node]) this.adjacencyList[node] = [];
  }

  addConnection(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  removeConnection(node1, node2) {
    this.adjacencyList[node1] = this.adjacencyList[node1].filter(
      (item) => item !== node2
    );
    this.adjacencyList[node2] = this.adjacencyList[node2].filter(
      (item) => item !== node1
    );
  }

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
