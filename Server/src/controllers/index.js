const getCharById = require("./getCharById");
const login = require("./login_old");
const { postFav, deleteFav } = require("./handleFavorites");

module.exports = {
    getCharById, login, postFav, deleteFav
}