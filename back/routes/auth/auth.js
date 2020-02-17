const  express  =  require('express');
const router = express.Router();
const { signup_get, signup_post } = require('../../controllers/signup-controller')


router.get('/signup', signup_get);

router.post('/signup', signup_post);

module.exports = router;