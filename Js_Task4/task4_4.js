let rand = Math.floor(Math.random() * 10) + 1;
let promises = [];

for (let i = 0; i < rand; i++) {
    promises.push(new Promise((resolve, reject) => {
        let sec = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => { resolve(console.log(`number:${i + 1} after ${sec} seconds`)) }, sec * 1000);
    }))
}

let timeBefore = new Date().getSeconds();

Promise.all(promises).then(()=>{
    let timeAfter = new Date().getSeconds();
    let second = timeBefore > timeAfter ? 60 - timeBefore + timeAfter : timeAfter - timeBefore;
    console.log(`Congratulation! The process lasted ${second} seconds`)
});