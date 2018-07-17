Array.prototype.reduce = function (combiner, initialValue) {
    let result;
    initialValue === undefined ? result = null : result = initialValue;
    for (let i = 0; i < this.length; i++) {
        result = combiner.call(null, result, this[i], i, this);
    }
    return result;
}
console.log([1, 2, 3].reduce(function (memo, item) { return memo + item; }) == [6]);
console.log([1, 2, 3].reduce(function (memo, item) { return memo + item; }, 10) == [16]);