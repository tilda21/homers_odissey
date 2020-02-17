const connection = require('../helpers/db');
const User = {};

//SignUp
User.post = (userInfo, callback) => {
	connection.query(
		`INSERT INTO users (email, password, name, lastname)
            VALUES (
                ?,
                ?,
                ?,
                ?
            )
        `,
		[userInfo.email, userInfo.password, userInfo.name, userInfo.lastname],
		(err, results, fields) => callback(err, results, fields)
	);
};

User.get = (callback) => {
	connection.query(
		'SELECT*FROM users',
		(err, results, fields) => callback(err, results, fields)
	);
 
};

module.exports = User;