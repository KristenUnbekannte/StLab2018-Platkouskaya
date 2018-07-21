var video = [{
    "id": 65432445,
    "title": "The Chamber"
}, {
    "id": 675465,
    "title": "Fracture"
}, {
    "id": 70111470,
    "title": "Die Hard"
}, {
    "id": 654356453,
    "title": "Bad Boys"
}];

console.log(video.reduce((memo, item) => { memo[item.id] = item.title; return memo; }, {}));
