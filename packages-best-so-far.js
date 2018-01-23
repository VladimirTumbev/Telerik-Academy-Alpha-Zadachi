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
    // '6',
    // '4 8',
    // '5 3',
    // '2 1',
    // '5 1',
    // '5 8',
    // '3 2',
    // '4',
    // '5',
    // '2',
    // '8',
    // '1',

    '3',
    '4 2',
    '3 1',
    '5 7',
    '6',
    '1',
    '2',
    '3',
    '4',
    '5',
    '7',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class Graph {
    constructor(node) {
        this.vertices = [];
        this.countActions = {};

        for (let i = 0; i < node; i++) {
            this.vertices[i] = [];
            this.countActions[i] = 0;
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
        this.countActions[y] += 1;
    }

    sortGraph(vertex) {
        const result = [];
        result.push(vertex);

        this.vertices[vertex].forEach((e) => {
            result.push(e);
        });
        result.forEach((e) => {
                for (let i = 0; i < this.vertices.length; i += 1) {
                    result.push(this.vertices[e][i]);
            }
        });
        result.sort((a, b) => a - b);
        return this.unique(result);
    }

    unique(arr) {
        return Array.from(new Set(arr));
    }
    // sortGraph(vertex) {
    //     const result = [];
    //     const holder = [];
    //     let currentHolder = 0;

    //     for (const key in this.countActions) {
    //         if (this.countActions[key] === 0) {
    //             holder.push(key);
    //         }
    //     }

    //     while (holder.length !== 0) {
    //         holder.sort((a, b) => b - a);
    //         currentHolder = holder.pop();
    //         result.push(currentHolder);
    //         this.vertices[currentHolder].forEach((e) => {
    //             this.countActions[e] -= 1;
    //             if (this.countActions[e] === 0) {
    //                 holder.push(e);
    //             }
    //         });
    //     }

    //     return result;
    // }
}


const m = +gets();
const graph = new Graph(m);

for (let i = 0; i < m; i += 1) {
    const [x, y] = gets().split(' ').map(Number);
    graph.addEdge(x, y);
}

const k = +gets();

for (let i = 0; i < k; i += 1) {
    print(graph.sortGraph(+gets()).join(' '));
}