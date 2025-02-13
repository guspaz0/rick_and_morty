import {Request, Response} from "express";
import Favorites from '../services/Favorites';

export default {
    postFav: async function(req: Request, res: Response) {
        try {
            //console.log(req.body)
            const {id, name, species, gender, origin, image, status, user} = req.body;
            if (!name || !gender || !species || !origin || !image || !status) {
                return res.status(401).json({ message: "Faltan datos" });
            }
            const {allfav, created} = await Favorites.postFavhandler({id, name, species, gender, origin, image, status}, user);
    
            if (created){
                //const AllFav = await Favorite.findAll()
                res.status(200).json(allfav)
                //console.log(allfav)
            }
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    },
    getFav: async function(req: Request, res: Response) {
        try {
            const {user} = req.query
            const Favs = await Favorites.findAll()
            res.status(200).json(Favs)
        } catch (error) {
            res.status(404).json({message: 'No se encontraron favoritos del usuario'})
        }
    },
    deleteFav: async function(req: Request, res: Response) {
        try{
            const {id} = req.params;
            if (!id) {
                return res.status(401).json({ message: "Faltan datos" });
            }
            await Favorites.deleteFav(+id)
    
            const AllFavorites = await Favorites.findAll()
            if (!AllFavorites) {res.status(200).json({message: 'No hay favoritos'})}
            
            res.status(200).json(AllFavorites)
    
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    
    }
}