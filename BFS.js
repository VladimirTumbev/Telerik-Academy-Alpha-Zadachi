/* globals Set */
class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(...args) {
        if (args.length === 1) {
            const node = new Node(args[0]);
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            this.length++;
        } else {
            args.forEach((x) => {
                this.append(x);
            });
        }
        return this;
    }

    prepend(...args) {

        if (args.length === 1) {
            const node = new Node(args[0]);
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                this.head.previous = node;
                node.next = this.head;
                this.head = node;
            }
            this.length++;
        } else {
            for (let i = args.length - 1; i >= 0; i--) {
                this.prepend(args[i]);
            }
        }
        return this;
    }

    insert(index, ...values) {
        if (index > this.length || index < 0) {
            throw new Error('Invalid index!');
        }

        if (index === 0) {
            return this.prepend(...values);
        } else if (index === this.length - 1) {
            this.append(...values);
        } else {
            const nodeToInsertAfter = this.nodeAtIndex(index - 1);

            if (values.length === 1) {
                const node = new Node(values[0]);
                nodeToInsertAfter.next.previous = node;
                node.next = nodeToInsertAfter.next;
                nodeToInsertAfter.next = node;
                node.previous = nodeToInsertAfter;
                this.length++;
            } else {
                values.forEach((x) => {
                    this.insert(index, x);
                    index++;
                });
            }
        }

        return this;
    }

    at(index, value) {
        this.isValidIndex(index);
        const node = this.nodeAtIndex(index);

        if (typeof value !== 'undefined') {
            node.data = value;
            return node;
        }

        return node.value;
    }

    removeAt(index) {
        this.isValidIndex(index);

        if (index < 0 && !this.head) {
            throw new Error('List is empty!');
        }

        if (index === 0) {
            const result = this.head.data;

            if (this.length === 1) {
                this.head = null;
                this.tail = null;
                this.length--;
                return result;
            }

            this.head = this.head.next;
            this.head.previous.next = null;
            this.head.previous = null;
            this.length--;
            return result;
        }

        const nodeToRemove = this.nodeAtIndex(index);
        const result = nodeToRemove.data;

        if (!nodeToRemove.next) {
            this.tail = nodeToRemove.previous;
            nodeToRemove.previous = null;
            this.tail.next = null;
        } else {
            nodeToRemove.previous.next = nodeToRemove.next;
            nodeToRemove.next.previous = nodeToRemove.previous;
            nodeToRemove.next = null;
            nodeToRemove.previous = null;
        }

        this.length--;
        return result;
    }


    isValidIndex(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Invalid Index!');
        }
    }

    nodeAtIndex(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    *[Symbol.iterator]() {
        let nextNode = this.head;
        while (nextNode !== null) {
            yield nextNode.data;
            nextNode = nextNode.next;
        }
    }

    toArray() {
        return [...this];
    }

    toString() {
        this.toArray().join(',');
    }

    get length() {
        return this._length;
    }

    set length(value) {
        this._length = value;
    }
}
class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue() {
        return this.linkedList.length ? this.linkedList.removeAt(0) : null;
    }

    get length() {
        return this.linkedList.length;
    }

    isEmpty() {
        return this.linkedList.length === 0;
    }
}

class Graph {
    constructor() {
        this.vertices = {};
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
    }

    addDirectedEdge(x, y) {
        if (typeof this.vertices[x] === 'undefined') {
            this.vertices[x] = [];
        }

        this.vertices[x].push(y);
    }

    bfs(from, to) {
        const queue = new Queue();
        const used = new Set();
        let bestPath = 0;
        let bestPathVertices = [];
        queue.enqueue({
            current: from,
            level: 0,
        });

        while (!queue.isEmpty()) {
            const {
                current,
                level,
            } = queue.dequeue();

            bestPathVertices.push(current);

            this.vertices[current]
                .filter((next) => !used.has(next))
                .forEach((next) => {
                    if (next === to) {
                        bestPath = level + 1;
                        bestPathVertices.push(next);
                    }
                    queue.enqueue({
                        current: next,
                        level: level + 1,
                    });
                    used.add(next);
                    // bestPathVertices.push(next);
                });
        }
        return bestPathVertices;
    }
}

const graph = new Graph();

graph.addEdge(1, 3);
graph.addEdge(1, 6);
graph.addEdge(3, 6);
graph.addEdge(6, 11);
graph.addEdge(11, 4);

const bfsBesetResult = graph.bfs(1, 4);
console.log(bfsBesetResult);
