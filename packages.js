/* globals Set */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '6',
    '4 8',
    '5 3',
    '2 1',
    '5 1',
    '5 8',
    '3 2',
    '4',
    '5',
    '2',
    '8',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

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

    printPaths(vertex, visitedVertexes) {
        const loopVertex = (vertex) => {
            if (visitedVertexes.includes(vertex)) {
                return;
            }
            visitedVertexes.push(vertex);
            for (let i = 0; i < graph.vertices.length; i += 1) {
                if (graph.vertices[i]) {
                    graph.vertices[i].forEach((e) => {
                        loopVertex(e, visitedVertexes);
                    });
                }
            }
        };
        loopVertex(vertex, visitedVertexes);
        return visitedVertexes.sort();
    }
    // allDfs(v, used, path) {
    //     if (used.has(v)) {
    //         return path;
    //     }
    //     this.vertices[v]
    //         .filter((next) => !used.has(next))
    //         .forEach((next) => {
    //             used.add(next);
    //             path.push(next);
    //             this.allDfs(next, used, path);
    //             used.delete(next);
    //         });

    //     return path;
    // }

    unique(arr) {
        return Array.from(new Set(arr));
    }
}


const m = +gets();
const graph = new Graph(m);

for (let i = 0; i < m; i += 1) {
    const [x, y] = gets().split(' ').map(Number);
    graph.addEdge(x, y);
}

const k = +gets();
// for (let i = 0; i < k; i += 1) {
//     print(graph.sortGraph(+gets()).join(' '));
// }

for (let i = 0; i < k; i += 1) {
    const visitedVertexes = [];
    let currentResult = graph.printPaths(+gets(), visitedVertexes);
    print(currentResult);
}