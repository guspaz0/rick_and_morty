import {Request, Response, NextFunction} from "express" 
import { validate } from "class-validator"
import { loginRequestDTO } from "../Dto/loginRequestDTO"
import { userRequestDTO } from "../Dto/userRequestDTO"
import FavoriteDTO from "../Dto/FavoriteDTO"

export default {
    login: async function(req: Request,res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body
            const loginRequest = new loginRequestDTO(email,password)
            const errors = await validate(loginRequest)
            if (errors.length > 0) {
                res.status(404).json(errors)
            } else next()
        } catch (error) {
            res.status(500).json(error)
        }
    },
    registerUser: async function(req: Request,res: Response, next: NextFunction) {
        try {
            const {name, password, email} = req.body
            const userRequest = new userRequestDTO(name, email, password)
            const errors = await validate(userRequest)
            if (errors.length > 0) {
                res.status(404).json(errors)
            } else next()
        } catch (error) {
            res.status(500).json(error)
        }
    },
    favorite: async function(req: Request,res: Response, next: NextFunction) {
        try {
            const {id, name, status, gender, species, image} = req.body
            const favoriteDto = new FavoriteDTO(id,name,status,gender,species,image)
            const errors = await validate(favoriteDto)
            if (errors.length > 0) {
                res.status(404).json(errors)
            } else next()
        } catch (error) {
            res.status(500).json(error)
        }
    }
}