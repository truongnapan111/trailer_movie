const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(morgan('combined'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use('/public', express.static(path.join(__dirname + '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.engine('handlebars', hbs.engine());

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resoursces', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
