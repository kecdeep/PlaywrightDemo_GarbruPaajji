const config = require('../config/config');

module.exports = {


    admin: {
        email: config.userName,
        password: config.userPassword
    },

    invalidUser: {
        email: 'abc@gmail.com',
        password: 'WrongPassword'
    }

};
