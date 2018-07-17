Promise.all([loadVideosAsync(), loadMetaAsync()])
    .then(function (videos, meta) {
        DoSomething(videos, meta);
    });