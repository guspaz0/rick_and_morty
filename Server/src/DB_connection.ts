import { Sequelize } from "sequelize";
import { DB_USER, DB_PASSWORD, DB_HOST } from './configs/envs'
import {UserModel} from './models/User';
import {FavoriteModel} from './models/Favorite';

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
    { logging: false, native: false });

FavoriteModel(sequelize)

UserModel(sequelize)

const {User, Favorite} = sequelize.models;

User.belongsToMany(Favorite, { through: 'User_favorite'});
Favorite.belongsToMany(User, { through: 'User_favorite'});


export const conn = sequelize
export {User, Favorite}
