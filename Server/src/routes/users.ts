import { Router } from "express";
const router: Router = Router()
import UserController from "../controllers/UserController";
import validate from '../middlewares/validate'

router.post("/login", validate.login, UserController.loginHandler);
router.post('/register', validate.registerUser, UserController.postUser);
router.delete("/delete/:id", UserController.deleteUser);

export default router