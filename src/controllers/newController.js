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

module.exports = controller;

// controller.save = (req, res) => {
//     res.send('Hola tonta');
// };

// controller.edit = (req, res) => {
//     res.send('Hola tonta');
// };

// controller.delete = (req, res) => {
//     res.send('Hola tonta');
// };