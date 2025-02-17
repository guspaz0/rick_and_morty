import FavoriteRepository from '../repository/favoriteRepository';
import { Favorite } from '../entities/Favorite';
import { User } from '../entities/User'
import FavoriteDTO from '../Dto/FavoriteDTO'
import UserService from './Users'

export default {
    postFavhandler: async function(favReq: FavoriteDTO, user: number) {
        try {
            let favorite = await FavoriteRepository.findOne({
                relations: { users: true },
                where: {id: favReq.id}
            })
            if (!favorite) {
                favorite = await FavoriteRepository.create({
                    id: favReq.id,
                    name: favReq.name,
                    gender: favReq.gender,
                    species: favReq.species,
                    status: favReq.status,
                    image: favReq.image
                })
            }
            const newFav = await FavoriteRepository.save(favorite)
            return await FavoriteRepository.addOrRemoveUser(user,newFav.id)
        } catch(error) {
            return error
        }

    },
    findAll: async function(userEmailOrId: String | Number) {
        try {
            let condition = {}
            if (userEmailOrId instanceof String) condition = {email: userEmailOrId}
            if (userEmailOrId instanceof Number) condition = {id: userEmailOrId}
            const allFavs = await FavoriteRepository.find({
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
            return await FavoriteRepository.findOneByOrFail({id: favId})
        } catch (error) {
            throw new Error()
        }
    },
    deleteFav: async function(favId: number, emailOrUser: String | number ) {
        try {
            const found: Favorite = await this.findOne(favId)
            const deleted = await FavoriteRepository.delete(found.id)
            if (deleted) {
                return {message: `Destroyed ${favId}`+ deleted}
            } else throw new Error()
        } catch (error) {
            return error
        }
    }
}