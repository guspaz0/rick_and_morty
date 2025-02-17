import {Request, Response} from "express";
import Favorites from '../services/Favorites';
import FavoriteDTO from "../Dto/FavoriteDTO";

export default {
    postFav: async function(req: Request, res: Response) {
        try {
            const user = req.headers.authorization
            const favRequest: FavoriteDTO = req.body
            const newFav = await Favorites.postFavhandler(favRequest, Number(user));
            res.status(201).json(newFav)
            //}
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    },
    getFav: async function(req: Request, res: Response) {
        try {
            const {user} = req.query
            const allFavs = await Favorites.findAll(String(user))
            res.status(200).json(allFavs)
        } catch (error) {
            res.status(404).json({message: 'No se encontraron favoritos del usuario'})
        }
    },
    deleteFav: async function(req: Request, res: Response) {
        try{
            const id: String = req.params.id;
            const user: String | undefined = req.headers.authorization
            const deleted = await Favorites.deleteFav(+id, Number(user))
    
            res.status(200).json(deleted)
    
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    
    }
}