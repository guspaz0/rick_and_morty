let myFavorites = [];

const postFav = function (req, res) {
    myFavorites.push(req.body);
    res.json(myFavorites);
}

const deleteFav = function (req, res) {
    const {id} = req.params;
    myFavorites = myFavorites.filter((fav) => fav.id !== id);
    res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
};
