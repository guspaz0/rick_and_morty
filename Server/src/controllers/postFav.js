const Favorite = require('../DB_connection');

const postFavhandler = async (fav) => {
    //const data = {name, origin, status, image, species, gender}
    const [fav, created ] = await Favorite.findOrCreate({ where: fav})
    return {fav, created}
}

const postFav = async (req,res) => {
    try {
        const {name, origin, status, image, species, gender} = req.body;
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