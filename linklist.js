class LinkList {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }

    get first() {
        if (this.length === 0) {
            return null;
        }
        return this.list[0];
    }

    get last() {
        if (this.length === 0) {
            return null;
        }
        return this.list[this.length - 1];
    }

    append(...arr) {
        this.list.push(...arr);
        return this;
    }

    prepend(...arr) {
        this.list.unshift(...arr.reverse());
        return this;
    }

    insert(index, ...arr) {
        this.list.splice(index, 0, ...arr);
        return this;
    }

}

const list = new LinkList();
console.log(list.append(1, 2, 3).append(4));
console.log(list.length);
console.log(list.first);
console.log(list.last);
