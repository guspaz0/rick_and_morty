import { FavoriteModel } from '../configs/data-source';
import { Favorite } from '../entities/Favorite';
import { User } from '../entities/User'
import FavoriteDTO from '../Dto/FavoriteDTO'
import UserService from './Users'

export default {
    postFavhandler: async function(favReq: FavoriteDTO, user: Number) {
        try {
            let favorite = await FavoriteModel.findOne({
                relations: { users: true },
                where: {id: favReq.id}
            })
            const foundUser: User = await UserService.findUser(user)
            if (!favorite) {
                favorite = new Favorite()
                favorite.id = favReq.id
                favorite.name = favReq.name
                favorite.gender = favReq.gender
                favorite.species = favReq.species
                favorite.status = favReq.status
                favorite.image = favReq.image
            }
            favorite.users = [...favorite.users, foundUser]
            const newFav = await FavoriteModel.save(favorite)
            return newFav
        } catch(error) {
            return error
        }

    },
    findAll: async function(userEmailOrId: String | Number) {
        try {
            let condition = {}
            if (userEmailOrId instanceof String) condition = {email: userEmailOrId}
            if (userEmailOrId instanceof Number) condition = {id: userEmailOrId}
            const allFavs = await FavoriteModel.find({
                relations: { users: true },
                where: {
                    users: condition
                }
            })
            return allFavs
        } catch (error: any) {
            return Error(error.message)
        }
    },
    findOne: async function(favId: number) {
        try {
            return await FavoriteModel.findOneByOrFail({id: favId})
        } catch (error) {
            throw new Error()
        }
    },
    deleteFav: async function(favId: number, emailOrUser: String | number ) {
        try {
            const found: Favorite = await this.findOne(favId)
            const deleted = await FavoriteModel.delete(found.id)
            if (deleted) {
                return {message: `Destroyed ${favId}`+ deleted}
            } else throw new Error()
        } catch (error) {
            return error
        }
    }
}