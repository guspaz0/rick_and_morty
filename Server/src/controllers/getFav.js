const {Favorite, User} = require('.././DB_connection')

const getFav = async (req,res) => {
    try {
        const {user} = req.query
        const Favs = await Favorite.findAll({
            include: {
                model: User,
                attributes: ['email'],
                where: {email: user},
                through: {attributes: []}
            },
            raw: true
        })
        res.status(200).json(Favs)
    } catch (error) {
        res.status(404).json({message: 'No se encontraron favoritos del usuario'})
    }
};

module.exports = getFav;