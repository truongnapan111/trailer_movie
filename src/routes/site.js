const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// router.get('/venom-2', siteController.video);

router.get('/', siteController.index);

module.exports = router;
