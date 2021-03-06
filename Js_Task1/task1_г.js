var newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "ration": [4.0],
    "bookmark": []
},
{
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "ration": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
},
{
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "ration": [4.0],
    "bookmark": []
},
{
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg&quot",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "ration": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
}];

console.log(newReleases.filter((arr_item) => { let [rating] = arr_item.ration; return rating === 5; })
                        .map((item_filtered) => { return item_filtered.id; }));
