import { Router } from "express";
const router: Router = Router()
import ThirdPartyController from "../controllers/ThirdPartyController";

router.get("/character/:id", ThirdPartyController.getCharById);

export default router