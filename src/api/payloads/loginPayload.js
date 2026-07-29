const config = require('../../config/config');

module.exports = {

    validUser: {
        userEmail: config.userName,
        userPassword: config.userPassword
    },

    invalidUser: {
        userEmail: "invalid@gmail.com",
        userPassword: "WrongPassword"
    }

};