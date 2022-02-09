const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM news', (err, news) => {
            if (err) {
                res.json(err);
            }
            res.render('news', {
                data: news
            });
        });
    });
};

controller.listNewsPapers = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM news', (err, news) => {
            if (err) {
                res.json(err);
            }
            res.render('newspapers', {
                data: news
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO news set ?', [data], (err, insertNew) => {
            console.log(insertNew);
            res.redirect('/mynews');
        });
    });
};

controller.edit = (req, res) => {
    const numId = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM news WHERE id = ?', [numId], (err, updateNew) => {
            console.log(updateNew[0]);
            res.render('edit_new', {
                data: updateNew[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const numId = req.params.id;
    const updatedNew = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE news set ? WHERE id = ?', [updatedNew, numId], (err, rows) => {
            res.redirect('/mynews');
        });
    });
};

controller.delete = (req, res) => {
    const numId = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM news WHERE id = ?', [numId], (err, rows) => {
            res.redirect('/mynews');
        });
    });
};



module.exports = controller;