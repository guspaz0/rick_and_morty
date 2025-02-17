import { Router, Request, Response } from "express";
const router: Router = Router()

router.get("/", async (req: Request, res: Response) => {
    try{
        res.status(200).json('Api rick and morty')
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
})

export default router