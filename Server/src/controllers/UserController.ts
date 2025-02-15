import {Request, Response} from "express";
import Users from "../services/Users"
import { loginRequestDTO } from "../Dto/loginRequestDTO";
import {User} from '../entities/User';
import { loginResponseDTO } from "../Dto/loginResponseDTO";
import { userRequestDTO } from "../Dto/userRequestDTO";


export default {
    postUser: async function(req: Request, res: Response) {
        try {
            const {name, password, email} = req.body
            const userRequest = new userRequestDTO(name, email, password)
            const newUser: User = await Users.register(userRequest);
            if (!newUser) {
                res.status(409).json({ message: "El usuario ya existe" });
            } else {
                res.status(201).json(newUser);
            }
        } catch (error: any) {
            res.status(500).json(error)
        }
    },
    loginHandler: async function(req: Request, res: Response) {
        try {
            const {email, password} = req.body;
            const loginRequest = new loginRequestDTO(email, password)
            const user: loginResponseDTO | any = await Users.handleLogin(loginRequest)
            res.status(200).json(user);
        } catch (error: any) {
            res.status(403).json({error: error.message})
        }
    },
    deleteUser: async function(req:Request, res: Response) {
        try {
            const {id} = req.params
            const deleted = await Users.delete(+id)
            res.status(203).json(deleted)
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    }
}