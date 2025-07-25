
//Graph
class Graph {
    constructor(){
        this.graph = {}
    }

    // adding  addjecent vertex
    addVertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex] = new Set()
        }
    }

    // adding edge
    addEdge(vertex1, vertex2){
        if(!this.graph[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.graph[vertex2]){
            this.addVertex(vertex2)
        }

        this.graph[vertex1].add(vertex2)
        this.graph[vertex2].add(vertex1)
    }

    // checking that edge is in the graph
    hasEdge(vertex1, vertex2){
        return (
            this.graph[vertex1].has(vertex2) &&
            this.graph[vertex2].has(vertex1)
        )
    }

    // Delete Edge
    removeEdge(vertex1, vertex2){
        this.graph[vertex1].delete(vertex2)
        this.graph[vertex2].delete(vertex1)
    }

    // Delete Vertex
    removeVertex(vertex){
        if(!this.graph[vertex]){
            return 
        }
        for(let adVertex of this.graph[vertex]){
            this.removeEdge(vertex, adVertex)
        }
        delete this.graph[vertex]
    }

    // BFS - Breadth first search
    BFS(start){
        let visited = new Set()
        let queue = [start]
        while(queue.length){
            let vertex = queue.shift()
            if(!visited.has(vertex)){
                console.log(vertex)
                visited.add(vertex)

                for(let neighbor of this.graph[vertex]){
                    if(!visited.has(neighbor)){
                        queue.push(neighbor)
                    }
                }
            }
        }
    }


    // DFS - Depth first method
    DFS(start){
        let visited = new Set()
        let stack = [start]
        while(stack.length){
            let vertex = stack.pop()
            if(!visited.has(vertex)){
                console.log(vertex)
                visited.add(vertex)

                for(let neighbor of this.graph[vertex]){
                    if(!visited.has(neighbor)){
                        stack.push(neighbor)
                    }
                }
            }
        }
    }

    // Shortest path using BFS-u unweighted
    shortestPath(start,end){
        let queue = [start]
        let visited = new Set()
        let parent = {}

        visited.add(start)
        parent[start] = null

        while(queue.length > 0){
            let vertex = queue.shift()

            if(vertex === end){
                let path = []
                while(vertex !== null){
                    path.push(vertex)
                    vertex = parent[vertex]
                }
                return path
            }

            for(let neighbor of this.graph[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    parent[neighbor] = vertex
                    queue.push(neighbor)
                }
            }
        }
        return null
    }

    display(){
        for(let vertex in this.graph){
            console.log(vertex+" - > "+[...this.graph[vertex]])
        }
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")

graph.display()
console.log(graph.hasEdge("A", "B"))

// graph.removeEdge("A", "B")
// graph.display()

// graph.removeVertex("A")
// graph.display()

graph.BFS("A")
console.log("///////////////")
graph.DFS("A")

console.log(graph.shortestPath("B", "E"))



class Graph {
    constructor() {
        this.graph = {};
    }

    addVertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);

        this.graph[v1].push(v2);
        this.graph[v2].push(v1);
    }

    
    display() {
        console.log(this.graph);
    }
}

const g = new Graph();

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");

g.display();