class Heap {
    constructor(compareFunc) {
        this.values = [null];
        this.compareFunc = compareFunc || ((x, y) => x < y);
    }

    get top() {
        return this.values[1];
    }

    get count() {
        return this.values.length - 1;
    }

    get isEmpty() {
        return this.count === 0;
    }

    add(value) {
        let index = this.values.length;
        this.values.push(value);

        while (index > 1 && this.compareFunc(value, this.values[index >> 1])) {
            this.values[index] = this.values[index >> 1];
            index >>= 1;
        }

        this.values[index] = value;
    }

    removeTop() {
        const value = this.values[this.values.length - 1];
        this.values.pop();

        if (!this.isEmpty) {
            this._heapifyDown(1, value);
        }
    }

    _heapifyDown(index, value) {
        while (index * 2 + 1 < this.values.length) {
            const isFirstChildBetter =
                this.compareFunc(
                    this.values[index * 2],
                    this.values[index * 2 + 1]
                );

            const smallerChildIndex = isFirstChildBetter ?
                index * 2 :
                index * 2 + 1;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            } else {
                break;
            }
        }

        if (index * 2 < this.values.length) {
            const smallerChildIndex = index * 2;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            }
        }

        this.values[index] = value;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = new Heap();
    }

    enqueue(val) {
        this.heap.add(val);

        return this;
    }

    dequeue() {
        const val = this.heap.top;
        this.heap.removeTop();
        return val;
    }

    isEmpty() {
        return this.heap.isEmpty;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addEdge(x, y, w) {
        this.addDirectedEdge(x, y, w);
        this.addDirectedEdge(y, x, w);
    }

    addDirectedEdge(from, to, weight) {
        if (typeof this.nodes[from] === 'undefined') {
            this.nodes[from] = [];
        }

        this.nodes[from].push({
            vertex: to,
            weight,
        });
    }
// dijkstra
    getBestDistance(from, to, m1, m2) {
        const fromDistances = this.getBestDistances(from, to, m1, m2);
        const endDistances = this.getBestDistances(to, from, m1, m2);
        const m1Distances = this.getBestDistances(m1, from, to, m2);
        const m2Distances = this.getBestDistances(m2, from, to, m1);

        return Math.min(
            fromDistances[m1] + endDistances[m2] + m1Distances[m2],
            fromDistances[m2] + endDistances[m1] + m2Distances[m1],
        );
    }


    getBestDistances(from, ...exclude) {
        const used = new Set(exclude);
        const queue = new PriorityQueue((x, y) => x.weight < y.weight);
        const d = Array.from({
            length: this.nodes.length
        }, () => Infinity);

        d[from] = 0;
        queue.enqueue({
            vertex: from,
            weight: 0,
        });

        while (!queue.isEmpty()) {
            const top = queue.dequeue();
            if (used.has(top.vertex)) {
                continue;
            }

            used.add(top.vertex);

            this.nodes[top.vertex]
                .forEach((next) => {
                    const newDistance = d[top.vertex] + next.weight;

                    if (d[next.vertex] > newDistance) {
                        d[next.vertex] = newDistance;
                    }

                    queue.enqueue(next);
                });
        }

        return d;
    }
}
// dijkstra
const readGraph = () => {
    const graph = new Graph();
    const [vertices, edges] = gets().split(' ').map(Number);
    const [start, end] = gets().split(' ').map(Number);
    const [m1, m2] = gets().split(' ').map(Number);

    for (let i = 0; i < edges; i += 1) {
        const [x, y, w] = gets().split(' ').map(Number);
        graph.addEdge(x, y, w);
    }

    return {
        graph,
        start,
        end,
        m1,
        m2,
    }
};

const solve = () => {
    const {
        graph,
        start,
        end,
        m1,
        m2
    } = readGraph();

    const best = graph.getBestDistance(start, end, m1, m2);
    return best;
};

print(solve());