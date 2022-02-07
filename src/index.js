// const express = require('express');
// const path = require('path');
// const exp_hbs = require('express-handlebars');
// const methodOverride = require('method-override');
// const expressSession = require('express-session');
// const session= require('passport');

// //Inizializations
// const app = express();

// //settings
// app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', exphbs.engine({
//     defaultLayout: 'main',
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     partialsDir: path.join(app.get('views'), 'partials'),
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');

// //Midedlewares
// app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
// app.use(session({
//     secret: 'dailyTrendsApp',
//     resave: true,
//     saveUninitialized: true
// }));
// //Global Variables

// //Routes
// app.use(require('./routes/index'));
// app.use(require('./routes/notes'));
// app.use(require('./routes/users'));


// //Static Files

// //Server is listenning
// app.listen(app.get('port'), () => {
//     console.log('Server on port', app.get('port'));
// });