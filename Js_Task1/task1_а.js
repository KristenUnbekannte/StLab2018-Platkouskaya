Array.prototype.map = function (projectionFunction) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(projectionFunction(this[i], i, this));
    }
    return array;
};

console.log(JSON.stringify([1, 2, 3].map(function (x) { return x + 1; })) === "[2,3,4]");
console.log(JSON.stringify([1, 2, 3].map(function (x) { return x + 10; })) === "[11,12,13]");