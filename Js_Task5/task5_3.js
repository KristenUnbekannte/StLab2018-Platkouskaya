db.getAllDocs()
    .then((result) => {
        return Promise.all(result.rows.forEach((row) => {
            return db.remove(row.doc);
        }));
    }).then(() => {
        // All docs must be removed!
    });