const  express  =  require('express');
const router = express.Router();

router.get('/signup', function(req, res, next) {
    res.send('I am in GET signup');
  });

router.post('/signup', function(req, res, next) {
    res.send('I am in POST signup');
  });

module.exports = router;