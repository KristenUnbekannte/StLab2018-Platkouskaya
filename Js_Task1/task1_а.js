Array.prototype.map = function (projectionFunction) {
    if (typeof projectionFunction === 'function') {
        const array = [];
        for (let i = 0; i < this.length; i++) {
            array.push(projectionFunction(this[i], i, this));
        }
        return array;
    }
    else {
        throw new Error("It's not a function!");
    }
};

console.log(JSON.stringify([1, 2, 3].map((array_item) => { return array_item + 1; })) === "[2,3,4]");
console.log(JSON.stringify([1, 2, 3].map((array_item) => { return array_item + 10; })) === "[11,12,13]");
