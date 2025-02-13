import {Request, Response} from "express";
import Users from "../services/Users"

export default {
    postUser: async function(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            console.log(req.body)
            if (email === '' || password === '') {
                res.status(400).json({ message: "Faltan datos" })};
            const {user, created} = await Users.register(email, password);
            if (!created) {
                res.status(409).json({ message: "El usuario ya existe" });
            } else {
                res.status(200).json([user]);
            }
        } catch (error: any) {
            console.log({message: error.message})
        }
    },
    loginHandler: async function(req: Request, res: Response) {
        console.log(req.body, 'login get')
        try {
            const {email, password} = req.body;
            if (email === "" || password === "") {
                return res.status(400).json({ message: "Faltan datos" });
            }
            const user = await Users.findUser(String(email))
            if (!user) {
                return res.status(404).json({message: 'Usuario no encontrado'});
            } else {
                if (password !== user.password) {
                    return res.status(403).json({message: 'Contraseña incorrecta'});
                } else {
                    return res.status(200).json({access: true});
                }
            }
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    }
}