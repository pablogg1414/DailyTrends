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

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO news set ?', [data],(err, insertNew) => {
            console.log(insertNew);
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const numId = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM news where id = ?', [numId],(err, rows) => {
            res.redirect('/');
        });
    });
};



module.exports = controller;