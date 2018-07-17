function doAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
doAsync().then(function () {
    throw new Error('nope');
})
.catch(function (err) {
    console.error(err.description);
});