import {User} from '../DB_connection';
import registerUser from '../interfaces/registerUser';
import IUser from '../interfaces/registerUser';

export default {
    register: async function(email: string, password: string): Promise<any> {
        try {
            const [user, created] = await User.findOrCreate({
                where: {email: email},
                defaults: {password}
            });
            const {user, created}
        } catch (error: any)  {
            throw Error(error.message)
        }
    },
    findUser: async function(email: String): Promise<any> {
        try {
            const user = await User.findOne({
                where: {email},
                raw: true
            })
            return user;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
};