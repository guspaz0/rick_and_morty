const User = require('../DB_connection');

const register = async (email,password) => {
    try {
        const [user, created] = await User.findOrCreate({
            where: {email},
            defaults: {password},
        })
        return {user, created}
    } catch (error)  {
        console.log(error)
    }
};

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email !== '' || password !== '') {
            res.status(400).json({ message: "Faltan datos" })};
        const {user, created} = await register(email,password);
        if (!created) {
            res.status(409).json({ message: "El usuario ya existe" });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        console.log({message: error.message})
    }

}

module.exports = postUser