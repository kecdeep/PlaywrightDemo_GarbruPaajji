const dotenv = require('dotenv');
const env = process.env.ENV || 'qa';

console.log("Loading File:", `.env.${env}`);

const result = dotenv.config({
    path: `.env.${env}`
});

console.log(result);
dotenv.config({
    path: `.env.${process.env.ENV || 'qa'}`,

});

module.exports = {
    baseURL: process.env.BASEURL,
    userName: process.env.APP_USERNAME,
    userPassword: process.env.APP_PASSWORD,
    apiURL: process.env.API_BASE_URL
};