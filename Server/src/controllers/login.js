const {User} = require('.././DB_connection');

const findUser = async (email) => {
    const user = User.findOne({
        where: {email},
    })
    return user;
}

const login = async (req,res) => {
    console.log(req.query)
    try {
        const {email, password} = req.query;
        if (email === "" || password === "") {
            res.status(400).json({ message: "Faltan datos" });
        }
        const user = await findUser(email)
        if (!user) {
            res.status(404).json({message: 'Usuario no encontrado'})
        }
        if (password !== user.password) {
            res.status(403).json({message: 'Contraseña incorrecta'});
        }
        res.status(200).json( {access: true} );
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
};

module.exports = login