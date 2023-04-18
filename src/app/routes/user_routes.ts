import { Router } from "express";
import UserControllers from "../controllers/user_controller";

const UserRouter = Router();

UserRouter.get("/", UserControllers.getUsers);

export default UserRouter;
