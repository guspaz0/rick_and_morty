require("dotenv").config();
const {PASSWORD} = process.env
const users =  [{email: 'gustip@gmail.com', password: PASSWORD}];

module.exports = users
