import {  UserModel } from '../configs/data-source';
import { loginRequestDTO } from '../Dto/loginRequestDTO';
import { loginResponseDTO } from '../Dto/loginResponseDTO';
import { userRequestDTO } from '../Dto/userRequestDTO';
import {User} from '../entities/User';


export default {
    register: async function(user: userRequestDTO): Promise<User> {
        try {
            const createUser = await UserModel.create(user)
            return await UserModel.save(createUser)
        } catch (error: any)  {
            return error
        }
    },
    findUser: async function(emailOrId: String | Number): Promise<User> {
        try {
            let condition = {}
            if (emailOrId instanceof String) condition = {email: emailOrId}
            if (emailOrId instanceof Number) condition = {id: emailOrId}
            return await UserModel.findOneByOrFail(condition)
        } catch (error: any) {
            return error
        }
    },
    handleLogin: async function(loginReq: loginRequestDTO): Promise<loginResponseDTO> {
        try {
            const user = await UserModel.findOneByOrFail({
                email: loginReq.email, 
                password: loginReq.password
            })
            const result: loginResponseDTO = {
                access: user? true : false, 
                email: user.email
            }
            return result
        } catch (error: any) {
            return error
        }
    },
    delete: async function(id: number) {
        try {
            const userData = await UserModel.findOne({
                relations: { favorites: true},
                where: {id: id}
            })
            if (userData) {
                userData.favorites = []
                await UserModel.save(userData)
                await UserModel.delete(userData)
                return {message: `User id ${id} deleted`}
            } else throw Error(`User ${id} Not found`)
        } catch (error: any) {
            return error
        }
    }
};