import { Router, Request, Response } from "express";
const router: Router = Router()

import FavoritesController from '../controllers/FavoritesController';


router.post("/", FavoritesController.postFav);
router.delete("/:id", FavoritesController.deleteFav);

export default router;