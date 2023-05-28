const Film = require('../models/Film');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //GET /
    index(req, res, next) {
        Film.find({})
            .then((films) => {
                res.render('home', {
                    films: mutipleMongooseToObject(films),
                });
            })
            .catch(next);

        // res.render('home');
    }
    //GET /venom-2
    video(req, res) {
        res.render('play-page');
    }
}
module.exports = new SiteController();
