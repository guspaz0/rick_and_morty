import {Favorite} from '../DB_connection';
import {User} from '../DB_connection';

export default {
    postFavhandler: async function(fav: any, user: number) {
        //const data = {name, origin, status, image, species, gender}
        const [Fav, created] = await Favorite.findOrCreate({ where: fav})
        if (created) {
            await Fav.addUser(user)
        }
        return { Fav, created}
    },
    findAll: async function(){
        try {
            return Favorite.findAll({
                include: {
                    model: User,
                    attributes: ['email'],
                    where: {email: user},
                    through: {attributes: []}
                },
                raw: true
            })
        } catch (error: any) {
            return Error(error.message)
        }
    },
    deleteFav: async function(id: Number) {
        await Favorite.destroy({where: {id: id}})
        console.log(`Destroyed ${id}`)
    }
}