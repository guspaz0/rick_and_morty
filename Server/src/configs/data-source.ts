import { DataSource } from "typeorm"
import { DB_HOST,DB_USER,DB_PASSWORD,DB_PORT } from "./envs"
import {Favorite} from "../entities/Favorite";
import {User} from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "192.168.5.2",
    port: Number(DB_PORT) || 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: "rickandmorty",
    dropSchema: true, // this property recreate database in every start
    synchronize: true,
    logging: true,
    entities: [ Favorite, User ],
    subscribers: [],
    migrations: []
})

export const UserModel = AppDataSource.getRepository(User)
export const FavoriteModel = AppDataSource.getRepository(Favorite)