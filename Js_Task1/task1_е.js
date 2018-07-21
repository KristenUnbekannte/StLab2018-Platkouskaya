var ratings = [2, 3, 1, 4, 5];
console.log(ratings.reduce((max, item) => { return max > item ? max : item; }));