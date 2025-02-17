import { AppDataSource } from "../configs/data-source";
import { User } from "../entities/User";

const UserRepository = AppDataSource.getRepository(User).extend({
    findById: async function(id: number): Promise<User> {
        return this.findOneByOrFail({id});
    },
    findByEmail: async function(email: string): Promise<User> {
        return this.findOneByOrFail({email})
    },
    findFavorites: async function(userId: number) {
        return this.findOneOrFail({
            relations: {favorites: true},
            where: {id: userId}
        })
    }
})

export default UserRepository