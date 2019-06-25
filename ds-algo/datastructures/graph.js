class Node {
    constructor(data){
        this.data = data;
        this.adjacents = []; //adjacency list
    }

    addAdjacent(node) {
        debugger;
        this.adjacents.push(node);
    }

    removeAdjacent(node) {
        debugger;
        var index = this.adjacents.indexOf(node);
        if(index > -1){
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    getAdjacents() {
        debugger;
        return this.adjacents();
    }

    isAdjacent(node){
        debugger;
        return this.adjacents.index(node) > -1;
    }
}

class Graph {
    constructor(edgeDirection = Graph.DIRECTED){
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }

    addVertex(value){
        debugger;
        if(this.nodes.has(value)){
            return this.nodes.get(value);
        } else {
            const vertex = new Node(value);
            this.nodes.set(value, vertex);
            return vertex;
        }
    }

    addEdge(source, destination) {
        debugger;
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);

        sourceNode.addAdjacent(destinationNode);
        
        if(this.edgeDirection == Graph.UNDIRECTED){
            destinationNode.addAdjacent(sourceNode);
        }
    }

    removeEdge(source, destination) {
        debugger;
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);
        if(sourceNode && destinationNode){
            this.nodes[sourceNode].removeAdjacent(destinationNode);
            if(this.edgeDirection === Graph.UNDIRECTED){
                this.nodes[destinationNode].removeAdjacent(sourceNode);
            }
        }
        return [sourceNode, destinationNode];
        
    }

    removeVertex(value){
        debugger;
        const vertex = this.nodes.get(value);
        if(vertex){
            for(let node in this.nodes.values()){
                node.removeAdjacent(vertex);
            }
            return this.nodes.delete(value);
        }
    }
}

Graph.DIRECTED = Symbol('directed graph');
Graph.UNDIRECTED = Symbol('undirected graph');


var graph = new Graph(Graph.UNDIRECTED);

graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
console.log(graph);