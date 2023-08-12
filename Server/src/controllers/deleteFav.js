const {Favorite} = require('.././DB_connection');

const DeleteFav = async (id)=> {
    await Favorite.destroy({where: {id: id}})
    console.log(`Destroyed ${id}`)
}

const deleteFav = async (req,res) => {
    try{
    const {id} = req.params;
    if (!id) {
        return res.status(401).json({ message: "Faltan datos" });
    }
    await DeleteFav(id)

    const AllFavorites = await Favorite.findAll()
    if (!AllFavorites) {res.status(200).json({message: 'No hay favoritos'})}
    
    res.status(200).json(AllFavorites)

    } catch (error) {
        res.status(500).json({error: error.message})
    }

};

module.exports = deleteFav