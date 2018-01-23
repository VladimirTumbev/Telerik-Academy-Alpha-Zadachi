const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
let test = [`7
8
2 7
2 6
1 4
1 7
7 3
3 6
3 5
5 6`];
test = test[0].split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;



class Graph {
    constructor() {
        this.vertices = {};
    }

    addEdge(v1, v2) {
        if (!this.vertices.hasOwnProperty(v1)) {
            this.vertices[v1] = [];
        }
        if (!this.vertices.hasOwnProperty(v2)) {
            this.vertices[v2] = [];
        }

        this.vertices[v1].push(+v2);
        this.vertices[v2].push(+v1);
    }
}

const graph1 = new Graph();
const n = +gets();
const m = +gets();

for (let i = 0; i < m; i++) {
    const edge = gets().split(' ');
    // console.log(gets());
    graph1.addEdge(edge[0], edge[1]);
}
// console.log(graph1.vertices);

const printGraphWithDfs = (graph) => {
    const used = Array(m).fill(false);
    const startVertex = 1;
    const path = Array(m).fill(0);
    path[startVertex] = -1;
    dfs(startVertex, used, graph, path);
    print(path);
};

const dfs = (startV, used, graph, path) => {
    // print(startV);
    used[startV] = true;
    // console.log(graph[startV]);
    for (const v of graph[startV]) {
        if (used[v]) {
            continue;
        }
        path[v] = startV;
        dfs(v, used, graph, path);
    }
};

printGraphWithDfs(graph1.vertices);