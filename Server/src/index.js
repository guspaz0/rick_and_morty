// const { throws } = require('assert');
// const http = require('http');

//const data = require("./utils/data")
const express = require('express');
const server = express();
const PORT = 3002;
const { conn } = require('./DB_connection');


//const getCharById = require('./controllers/getCharById');

// http.createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     console.log(req.url);
//     try {
//         const {url} = req;
//         if (url.includes("/rickandmorty/character/")) {
//             const id = url.split("/").at(-1);
//             // if (id) {
//             //     const character = data.filter((char) => char.id == id)
//             //     console.log(character)
//             // }
//                 getCharById(res,id)
//             }
    
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// })
// .listen(PORT, () => console.log(`server on port ${PORT}`))

const router = require('./routes');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json())
server.use("/rickandmorty", router)

conn.sync({force: true})
    .then(() => {
        try {
            server.listen(PORT, () => {
                console.log('Server raised in port: ' + PORT);
            });
        } catch (error) {
            console.log(error)
        }
    }
    )
    .catch((error) => {console.log(error)})
