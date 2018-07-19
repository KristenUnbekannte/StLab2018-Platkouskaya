function GetUser(json) {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`tit${i + 1}`).innerHTML = json[i].title;
    document.getElementById(`cont${i + 1}`).innerHTML = json[i].content;
    document.getElementById(`img${i + 1}`).src = json[i].url;
  }
}

fetch('https://api.myjson.com/bins/ro16y')
  .then(response => response.json())
  .then(json => GetUser(json))
