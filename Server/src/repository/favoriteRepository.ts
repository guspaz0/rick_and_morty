import { AppDataSource } from "../configs/data-source";
import { Favorite } from "../entities/Favorite";
import {User} from "../entities/User";
import UserRepository from "./userRepository";

enum Action {
    ADD = "ADD",
    DELETE = "DELETE"
}

const FavoriteRepository = AppDataSource.getRepository(Favorite).extend({
    addOrRemoveUser: async function(userId: number, favId: number) {
        try {
            let action: Action;
            const userFav = await UserRepository.findFavorites(userId)
            if (userFav.favorites.some(fav => fav.id === favId)) {
                userFav.favorites = userFav.favorites.filter(fav=> fav.id !== favId)
                action = Action.DELETE
            } else {
                const favorite = await this.findOneByOrFail({id: favId})
                userFav.favorites.push(favorite)
                action = Action.ADD
            }
            await UserRepository.save(userFav)
            return action
        } catch (error) {
            return error
        }
    }
})

export default FavoriteRepository