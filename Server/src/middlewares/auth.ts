import {NextFunction, Request, Response} from 'express'
import Users from '../services/Users'
import {User} from '../entities/User'

export default {
    verifyToken: async function(req: Request, res:Response, next: NextFunction) {
        try {
            const {authotization} = req.headers
            if (authotization) {
                const user: User = await Users.findUser(Number(authotization))
                if(user) next()
                else throw new Error()
            } else {
                res.status(401).json({message: 'Full access required to use this resource'})
            }
        } catch (error) {
            res.status(401).json({message: 'Full access required to use this resource'})
        }
    }
}