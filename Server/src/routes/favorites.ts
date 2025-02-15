import { Router, Request, Response } from "express";
const router: Router = Router()

import FavoritesController from '../controllers/FavoritesController';


router.get("/", async (req: Request, res: Response) => {
    try{
        res.status(200).json('Api rick and morty')
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
})

router.post("/fav", FavoritesController.postFav);
router.get('/fav', FavoritesController.getFav)
router.delete("/fav/:id", FavoritesController.deleteFav);

export default router;