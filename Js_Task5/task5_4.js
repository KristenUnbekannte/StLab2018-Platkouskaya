function doAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
doAsync().then(function () {
})
.catch(function (err) {
    throw new Error('nope');
});