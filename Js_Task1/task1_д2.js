Array.prototype.reduce = function (combiner, initialValue) {
    if (typeof combiner === "function") {
        let result;
        initialValue === undefined ? result = null : result = initialValue;
        for (let i = 0; i < this.length; i++) {
            result = combiner.call(null, result, this[i], i, this);
        }
        return result;
    }
    else {
        throw new Error("It's not a function");
    }
}

console.log([1, 2, 3].reduce(function (memo, item) { return memo + item; }) == [6]);
console.log([1, 2, 3].reduce(function (memo, item) { return memo + item; }, 10) == [16]);