import { Router } from "express";
const router: Router = Router()
import UserController from "../controllers/UserController";
import validate from '../middlewares/validate'
import auth from '../middlewares/auth'

router.get("/favorites", auth.verifyToken, UserController.getFavorites)
router.post("/login", validate.login, UserController.loginHandler);
router.post('/register', validate.registerUser, UserController.create);
router.delete("/delete/:id", UserController.deleteUser);

export default router