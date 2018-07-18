Array.prototype.map = function (projectionFunction) {
    if (typeof projectionFunction === 'function') {
        let array = [];
        for (let i = 0; i < this.length; i++) {
            array.push(projectionFunction(this[i], i, this));
        }
        return array;
    }
    else {
        throw new Error("It's not a function!");
    }
};

console.log(JSON.stringify([1, 2, 3].map(function (x) { return x + 1; })) === "[2,3,4]");
console.log(JSON.stringify([1, 2, 3].map(function (x) { return x + 10; })) === "[11,12,13]");
