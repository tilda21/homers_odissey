const User = require('../models/User');

const signup_post = (req, res, next) => {
    User.post(req.body, (err, results) => {
		if(err) {
            console.log(err)
			res.status(500).json({ message: 'Error posting user' });
		} else {
			res.send('I am in POST signup');
		}
	});
    
};
const signup_get = (req, res, next) => {
    User.get((err, results) => {
		if(err) {
            
			res.status(500).json({ message: 'Error getting all the information' });
		} else {
			res.json(results);
		}
	});
};

module.exports = {
    signup_get, 
    signup_post
}