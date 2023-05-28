const express = require('express');
const router = express.Router();

const filmsController = require('../app/controllers/FilmController');

router.get('/create', filmsController.create);
router.post('/store', filmsController.store);
router.get('/:id/edit', filmsController.edit);
router.put('/:id', filmsController.update);
// router.delete('/:id', filmsController.delete);
router.get('/:slug', filmsController.show);

module.exports = router;
