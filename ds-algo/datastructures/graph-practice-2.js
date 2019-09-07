class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }

  addAdjacent(node) {
    this.adjacents.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1);
      return true;
    }
    return false;
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      let vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const desintationNode = this.addVertex(destination);

    sourceNode.addAdjacent(desintationNode);
    if (this.edgeDirection == Graph.UNDIRECTED) {
      desintationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, desintationNode];
  }

  removeVertex(value) {
    let vertex = this.nodes.get(value);
    if (!vertex) return false;
    for (let node of this.nodes.values()) {
      node.removeAdjacent(vertex);
    }
    return this.nodes.delete(value);
  }

  removeEdge(source, destination) {
    let sourceNode = this.nodes.get(source);
    let desintationNode = this.nodes.get(destination);
    if (sourceNode && desintationNode) {
      sourceNode.removeAdjacent(destinationNode);
      if (this.edgeDirection == Graph.UNDIRECTED) {
        desintationNode.removeAdjacent(sourceNode);
      }
    }
    return [sourceNode, desintationNode];
  }

  bfs(vertex) {
      debugger;
    let visited = {};
    let visitList = [];
    let bfsOrder = [];

    let startNode = this.nodes.get(vertex);
    visitList.push(startNode);
    while (visitList.length > 0) {
      let deQueued = visitList.shift();
      
      if (!visited[deQueued.value]) {
        visited[deQueued.value] = true;
        bfsOrder.push(deQueued.value);
        deQueued.getAdjacents().forEach(adj => {
            visitList.push(adj);
        });
      }
    }
    return bfsOrder;
    
  }

  dfs(vertex) {
    debugger;
  let visited = {};
  let visitList = [];
  let dfsOrder = [];

  let startNode = this.nodes.get(vertex);
  visitList.push(startNode);
  while (visitList.length > 0) {
    let deQueued = visitList.pop();
    
    if (!visited[deQueued.value]) {
      visited[deQueued.value] = true;
      dfsOrder.push(deQueued.value);
      deQueued.getAdjacents().forEach(adj => {
          visitList.push(adj);
      });
    }
  }
  return dfsOrder;
  
}
}

Graph.UNDIRECTED = Symbol("undirected");
Graph.DIRECTED = Symbol("directed");


const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

console.log(graph.bfs(1));

console.log(graph.dfs(1));