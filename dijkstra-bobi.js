lass Vertix {
    constructor(vertix, weight) {
        this.vertix = vertix;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.vertices = {};
    }

    addEdge(v1, v2, weight) {
        if (!this.vertices.hasOwnProperty(v1)) {
            this.vertices[v1] = [];
        }
        if (!this.vertices.hasOwnProperty(v2)) {
            this.vertices[v2] = [];
        }

        this.vertices[v1].push(new Vertix(v2, weight));
        this.vertices[v2].push(new Vertix(v1, weight));
    }
}
// n is the number of nodes and m is the number of edges
const [n, m] = gets().split(' ').map((x) => +x);
// console.log(n, m);
// start is the starting point, final is the end point
const [startCity, final] = gets().split(' ').map((x) => +x);
// console.log(startCity, final);
// m1 and m2 are the points we have to pass first before going to final
const [m1, m2] = gets().split(' ').map((x) => +x);
// console.log(m1, m2);

const graph = new Graph();


for (let i = 0; i < m; i++) {
    const edge = gets().split(' ').map((x) => +x);
    graph.addEdge(edge[0], edge[1], edge[2]);
}


// console.log(graph.vertices);


const dijkstra = (g, start) => {
    const queue = new BinaryHeap((a, b) => a.weight < b.weight);
    const d = Array.from({
        length: n + 1,
    }, () => Number.MAX_SAFE_INTEGER);
    d[0] = null;
    const used = new Set();
    // calculate path
    // const path = Array.from({
    //     length: n + 1,
    // }, () => 0);
    // path[0] = null;
    d[start] = 0;

    queue.insert(new Vertix(start, 0));

    while (!queue.isEmpty()) {
        const node = queue.getTop();
        queue.removeTop();

        if (used.has(node.vertix)) {
            continue;
        }
        used.add(node.vertix);

        for (const nextNode of g[node.vertix]) {
            const currDistance = d[nextNode.vertix];
            const newDistance = d[node.vertix] + nextNode.weight;
            if (currDistance > newDistance) {
                d[nextNode.vertix] = newDistance;
                // path[nextNode.vertix] = node.vertix;
                queue.insert(new Vertix(nextNode.vertix, newDistance));
            }
        }

        // console.log('--distnces--');
        // console.log(d);
    }
    // console.log(path);
    return d;
};

// const distStart = dijkstra(graph.vertices, startCity);
const distm1 = dijkstra(graph.vertices, m1);
const distm2 = dijkstra(graph.vertices, m2);

// console.log(distm1[startCity], distm1[final], distm2[startCity], distm2[final]);
print(Math.min(distm1[startCity] + distm2[final], distm2[startCity] + distm1[final]) + distm1[m2]);