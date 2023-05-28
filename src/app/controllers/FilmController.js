const Film = require('../models/Film');
const { mongooseToObject } = require('../../util/mongoose');

class FilmController {
    //GET /films/:slug
    show(req, res, next) {
        Film.findOne({ slug: req.params.slug })
            .then((film) => {
                res.render('films/show', { film: mongooseToObject(film) });
            })
            .catch(next);
    }
    //GET /films/create
    create(req, res, next) {
        res.render('films/create');
    }

    //POST /films/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const film = new Film(formData);
        film.save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
    //GET /films/:id/edit
    edit(req, res, next) {
        Film.findById(req.params.id)
            .then(film => res.render('films/edit', {
                film: mongooseToObject(film)
            }))
    }
    //DELETE /films/:id
    update(req,res,next){
        Film.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/films'))
            .catch(next)
    }
    // delete(req,res,next){
    //     Film.deleteOne({_id: req.params.id})
    //         .then(() => res.redirect('back'))
    //         .catch(next)
    // }
}
module.exports = new FilmController();
