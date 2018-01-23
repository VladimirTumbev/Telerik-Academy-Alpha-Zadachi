/* globals Map */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '8',
    'index.html needs main.css',
    'main.css needs sub1.css',
    'index.html needs main.js',
    'main.css needs sub2.css',
    'index.html needs logo.png',
    'main.js needs player.png',
    'main.js needs partial.html',
    'partial.html needs partial.js',
    // '11',
    // 'main.css needs sub1.css',
    // 'index.html needs main.js',
    // 'main.css needs sub2.css',
    // 'main.js needs partial.html',
    // 'index.html needs logo.png',
    // 'index.html needs sub2.css',
    // 'partial.html needs partial.js',
    // 'main.js needs player.png',
    // 'index.html needs main.css',
    // 'sub2.css needs partial.js',
    // 'index.html needs partial.html',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
class Graph {
    constructor(node) {
        this.vertices = new Map();
        this.countActions = new Map();
    }
    addEdge(x, y) {
        if (!this.vertices.get(x)) {
            this.vertices.set(x, []);
        }
        this.vertices.get(x).push(y);
        if (!this.countActions.get(x)) {
            this.countActions.set(x, 0);
        }
        if (!this.countActions.get(y)) {
            this.countActions.set(y, 0);
        }
        this.countActions.set(y, this.countActions.get(y) + 1);
    }
    sortGraph() {
        const holder = [];
        const result = [];
        let currentAction;
        for (const kvp of this.countActions) {
            if (kvp[1] === 0) {
                holder.push(kvp[0]);
            }
        }
        while (holder.length > 0) {
            holder.sort((x, y) => x < y);
            currentAction = holder.pop();
            result.push(currentAction);
            if (this.vertices.get(currentAction)) {
                this.vertices.get(currentAction).forEach((e) => {
                    this.countActions.set(e, this.countActions.get(e) - 1);
                    if (this.countActions.get(e) === 0) {
                        holder.push(e);
                    }
                });
            }
        }
        return result;
    }
}
const nodes = +gets();
const graph = new Graph(nodes);
for (let i = 0; i < nodes; i++) {
    const [x, y] = gets().split(' needs ');
    graph.addEdge(x, y);
}
print(graph.sortGraph().join(' '));
