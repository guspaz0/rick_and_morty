// const { throws } = require('assert');
// const http = require('http');

//const data = require("./utils/data")
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const server = express();

//const { conn } = require('./DB_connection');


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

server.disable('x-powered-by')

server.name = 'API';
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
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

//server.use(express.json())
server.use("/rickandmorty", router)


server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});


module.exports = server