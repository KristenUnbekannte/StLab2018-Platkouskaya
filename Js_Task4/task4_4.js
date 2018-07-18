const rand = Math.floor(Math.random() * 10) + 1;
const promises = [];

for (let i = 0; i < rand; i++) {
    promises.push(new Promise((resolve, reject) => {
        const sec = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            console.log(`number:${i + 1} after ${sec} seconds`);
            resolve(sec)
        }, sec * 1000);
    }))
}

Promise.all(promises).then((sec) => {
    const seconds = sec.reduce((max, item) => { return max > item ? max : item; })
    console.log(`Congratulation! The process lasted ${seconds} seconds`)
});