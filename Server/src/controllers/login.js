const users = require('../utils/users');

const login = function (req, res) {
    const {email, password} = req.query;
    const user = users.find(
        (e) => e.email === email && e.password === password);
    console.log(req.query)
    console.log(users)
    if (user) {
        res.status(200).json({ access: true });
    } else {
        res.status(200).json({ access: false });
    }
};

module.exports = login;