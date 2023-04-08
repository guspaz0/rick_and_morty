const { throws } = require('assert');
const http = require('http');
const PORT = 3001;
//const data = require("./utils/data")
const getCharById = require('./controllers/getCharById');

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.url);
    try {
        const {url} = req;
        if (url.includes("/rickandmorty/character/")) {
            const id = url.split("/").at(-1);
            // if (id) {
            //     const character = data.filter((char) => char.id == id)
            //     console.log(character)
            // }
                getCharById(res,id)
            }
    
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
})
.listen(PORT, () => console.log(`server on port ${PORT}`))