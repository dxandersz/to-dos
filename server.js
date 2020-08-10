const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

const toDoRouter = require('./routes/user-router.js');

const app = express();
require('dotenv').config();

var methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('index', {
        appName: 'todos',
    });
});

app.use('/todos', toDoRouter);

app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not Found',
    });
});

app.use((err, req, res, next) => {
    res.status(500).send({ err, message: err.message });
});