const Film = require('../models/Film');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //GET /me/stored/films
    storedFilms(req, res, next) {
        Film.find({})
            .then((films) =>
                res.render('me/stored-films', {
                    films: mutipleMongooseToObject(films),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeController();
