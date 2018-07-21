function doAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
doAsync().then(() => {
})
    .catch((err) => {
        throw new Error('nope');
    });