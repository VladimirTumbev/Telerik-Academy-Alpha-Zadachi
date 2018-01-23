class HashSet {
    constructor(hashFunc, equalsFunc) {
        this.values = {};
        this.count = 0;
        this.hashFunc = hashFunc || ((key) => key.toString());
        this.equalsFunc = equalsFunc || ((k1, k2) => k1 === k2);
    }

    add(value) {
        const valueHash = this.hashFunc(value);
        if (typeof this.values[valueHash] === 'undefined') {
            this.values[valueHash] = [];
        }

        const valueIndex =
            this.values[valueHash]
            .findIndex(([v, _]) => this.equalsFunc(v, value));
        if (valueIndex >= 0) {
            this.values[valueHash][valueIndex] = [value, true];
        } else {
            this.values[valueHash].push([value, true]);
            this.count += 1;
        }

        return this;
    }

    contains(value) {
        const valueHash = this.hashFunc(value);

        if (typeof this.values[valueHash] === 'undefined') {
            return false;
        }

        const index = this.values[valueHash]
            .findIndex(([k, _]) => this.equalsFunc(k, value));

        return index >= 0 && this.values[valueHash][index][1];
    }

    remove(value) {
        const valueHash = this.hashFunc(value);
        if (typeof this.values[valueHash] === 'undefined') {
            return this;
        }

        const index = this.values[valueHash]
            .findIndex(([k, _]) => this.equalsFunc(k, value));
        if (index >= 0) {
            this.values[valueHash].splice(index, 1);
        }

        return this;
    }
}

module.exports = HashSet;
