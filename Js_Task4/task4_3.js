new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 4) + 1;
    if (rand <= 2) {
        resolve("success")
    }
    else {
        reject("The process took more than 2 seconds");
    }
})
.then((result) => {
        console.log(result);
})
.catch((result => {
        console.error(result);
}))