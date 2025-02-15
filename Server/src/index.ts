import express,{ErrorRequestHandler, NextFunction, Request, Response} from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { PORT } from './configs/envs';
import favoritesRoutes from './routes/favorites';
import userRoutes from './routes/users'
import rickAndMortyApi from './routes/rickAndMotyApi'
import auth from './middlewares/auth'
import 'reflect-metadata'
import { AppDataSource } from "./configs/data-source";
import { preloadData } from './helpers/preloadData'


const server = express();

server.disable('x-powered-by')

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(cors({
    origin: true,
    credentials: true
}))

server.use("/rickandmorty", rickAndMortyApi)
server.use("/favorites", auth.verifyToken, favoritesRoutes)
server.use("/user", userRoutes)

const initializeApp = async ()=> {
    await AppDataSource.initialize()
    await preloadData()
    server.listen(PORT, ()=> {
        console.log(`Server raised in port: ${PORT}`);
    })
}

initializeApp()