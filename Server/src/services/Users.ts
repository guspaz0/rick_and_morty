import UserRepository from '../repository/userRepository';
import { loginRequestDTO } from '../Dto/loginRequestDTO';
import { loginResponseDTO } from '../Dto/loginResponseDTO';
import { userRequestDTO } from '../Dto/userRequestDTO';
import {User} from '../entities/User';


export default {
    register: async function(user: userRequestDTO): Promise<User> {
        try {
            const createUser = await UserRepository.create(user)
            return await UserRepository.save(createUser)
        } catch (error: any)  {
            return error
        }
    },
    findUser: async function(emailOrId: String | Number): Promise<User> {
        try {
            if (typeof(emailOrId) === 'string') {
                return await UserRepository.findByEmail(emailOrId)
            }
            if (typeof(emailOrId) === 'number') {
                return await UserRepository.findById(emailOrId)
            } else throw Error('parametros incorrectos')
        } catch (error: any) {
            return error
        }
    },
    getAllFavorites: async function(userId:number){
        try {
            const allFavs = await UserRepository.findFavorites(userId)
            return allFavs.favorites
        } catch (error) {
            return error
        }
    },
    handleLogin: async function(loginReq: loginRequestDTO): Promise<loginResponseDTO> {
        try {
            const user = await this.findUser(loginReq.email)
            const result: loginResponseDTO = {
                access: false,
                email: user.email
            }
            if (user.password == loginReq.password) {
                result.access = true
                result.name = user.name
                result.id = user.id
            }
            return result
        } catch (error: any) {
            return error
        }
    },
    delete: async function(id: number) {
        try {
            const userData = await UserRepository.findOneOrFail({
                relations: { favorites: true },
                where: {id}
            })
            console.log('user data: ',userData)
            if (userData) {
                userData.favorites = []
                await UserRepository.save(userData)
                await UserRepository.delete(userData)
                return {message: `User id ${id} deleted`}
            } else throw Error(`User ${id} Not found`)
        } catch (error: any) {
            return error
        }
    }
};