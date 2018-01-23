/* globals Set */
class Graph {
    constructor(node) {
        this.vertices = [];

        for (let i = 0; i < node; i++) {
            this.vertices[i] = [];
        }
    }

    addEdge(x, y) {
        if (!this.vertices[x]) {
            this.vertices[x] = [];
        }
        if (!this.vertices[y]) {
            this.vertices[y] = [];
        }
        this.vertices[x].push(y);
    }

    allDfs(v, used, path) {
        if (used.has(v)) {
            return path;
        }
        this.vertices[v]
            .filter((next) => !used.has(next))
            .forEach((next) => {
                used.add(next);
                path.push(next);
                this.allDfs(next, used, path);
                used.delete(next);
            });

        return path;
    }
}

const graph = new Graph();
graph.addEdge(1, 3);
graph.addEdge(1, 6);
graph.addEdge(3, 6);
graph.addEdge(6, 11);
graph.addEdge(11, 4);
const path = [];
const existsPathBetween = graph.allDfs(1, new Set(), path);
console.log(existsPathBetween);