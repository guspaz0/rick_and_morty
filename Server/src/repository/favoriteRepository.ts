import { AppDataSource } from "../configs/data-source";
import { Favorite } from "../entities/Favorite";
import UserRepository from "./userRepository";

const FavoriteRepository = AppDataSource.getRepository(Favorite).extend({
    addOrRemoveUser: async function(userId: number, favId: number){
        try {
            const userFav = await UserRepository.findFavorites(userId)
            if (userFav.favorites.some(fav => fav.id === favId)) {
                userFav.favorites = userFav.favorites.filter(fav=> fav.id === favId)
            } else {
                const favorite = await this.findOneByOrFail({id: favId})
                userFav.favorites.push(favorite)
            }
            return await UserRepository.save(userFav)
        } catch (error) {
            return error
        }
    }
})

export default FavoriteRepository