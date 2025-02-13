import express,{Request, Response} from "express";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import {conn} from './DB_connection';
import { PORT } from './configs/envs';
import router from './routes';

const server = express();

server.disable('x-powered-by')

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
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

server.use("/rickandmorty", router)

server.use((err, req: Request, res: Response, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

conn.sync({force: true}).then(() => {
    server.listen(PORT, () => {
        console.log(`Server raised in port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error)
}
)