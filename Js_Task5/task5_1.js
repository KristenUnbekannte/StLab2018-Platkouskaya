Promise.all([loadVideosAsync(), loadMetaAsync()])
    .then((videos, meta) => {
        DoSomething(videos, meta);
    });