const {Favorite} = require('../DB_connection');

const postFavhandler = async (fav) => {
    //const data = {name, origin, status, image, species, gender}
    const [Fav, created ] = await Favorite.findOrCreate({ where: fav})
    return { Fav, created}
}

const postFav = async (req,res) => {
    try {
        console.log(req.body)
        const {name, species, gender, image} = req.body;
        if (!name || !gender || !species || !origin || !image || !status) {
            return res.status(401).json({ message: "Faltan datos" });
        }
        const {allfav, created} = await postFavhandler(...req.body);

        if (!created)
            await Favorite.findAll()
        res.status(200).json(allfav)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postFav