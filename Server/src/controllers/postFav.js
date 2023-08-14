const {Favorite} = require('../DB_connection');

const postFavhandler = async (fav, user) => {
    //const data = {name, origin, status, image, species, gender}
    const [Fav, created ] = await Favorite.findOrCreate({ where: fav})
    if (created) {
        await Fav.addUser(user)
    }
    return { Fav, created}
}

const postFav = async (req,res) => {
    try {
        //console.log(req.body)
        const {id, name, species, gender, origin, image, status, user} = req.body;
        if (!name || !gender || !species || !origin || !image || !status) {
            return res.status(401).json({ message: "Faltan datos" });
        }
        const {allfav, created} = await postFavhandler({id, name, species, gender, origin, image, status}, user);

        if (created){
            //const AllFav = await Favorite.findAll()
            res.status(200).json(allfav)
            //console.log(allfav)
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postFav