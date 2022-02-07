const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importing routes
const newRoutes = require('./routes/new');

//Express settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'dailytrends'
}, 'single'));

//Routes
app.use('/', newRoutes);


//Static files (Not necessary)
app.use(express.static(path.join(__dirname, 'public')));


//Start server
app.listen(3000, () => {
    console.log('Server on port 3000');
});