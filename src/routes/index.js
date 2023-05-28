const newsRouter = require('./login');
const meRouter = require('./me');
const filmsRouter = require('./films');
const siteRouter = require('./site');

function route(app) {
    app.use('/login', newsRouter);
    app.use('/me', meRouter);
    app.use('/films', filmsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
