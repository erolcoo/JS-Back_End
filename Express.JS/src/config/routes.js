const { Router } = require('express');
const { home,details,search } = require('../controllers/catalogController');
const { errorController } = require("../controllers/404Controller");
const {aboutController} = require('../controllers/aboutController');
const { createGet, createPost } = require('../controllers/movie');



const router = Router();


router.get('/', home);
router.get('/about', aboutController);
router.get('/details/:id', details);
router.get('/search', search);
router.get('/create', createGet);
router.post('/create', createPost);
router.get('*', errorController);



module.exports = { router };

