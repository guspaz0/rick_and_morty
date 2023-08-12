const {User} = require('.././DB_connection');

const findUser = async (email) => {
    try {
        const user = await User.findOne({
            where: {email},
            raw: true
        })
        console.log(user, 'login atemp')
        return user;
    } catch (error) {
        return error
    }
}

const login = async (req,res) => {
    console.log(req.query)
    try {
        const {email, password} = req.query;
        if (email === "" || password === "") {
            return res.status(400).json({ message: "Faltan datos" });
        }
        const user = await findUser(email)
        if (!user) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        if (password !== user.password) {
            return res.status(403).json({message: 'Contraseña incorrecta'});
        }
        return res.status(200).json({access: true});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
};

module.exports = login