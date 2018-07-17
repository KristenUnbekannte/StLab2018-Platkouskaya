Array.prototype.filter = function (predicateFunction) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        if (predicateFunction(this[i], i, this)) {
            array.push(this[i]);
        }
    }
    return array;
};

console.log(JSON.stringify([1, 2, 3].filter(function (x) { return x > 2; })) === "[3]");
console.log(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]
           .filter(function (x) { return x + 1 > 4; })) === "[4,5,6,7,8]");