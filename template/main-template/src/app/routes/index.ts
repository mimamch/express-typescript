import { Router } from "express";
import UserRouter from "./user_routes";
import ProductRouter from "./product_routes";

const MainRouter = Router();

MainRouter.use("/user", UserRouter);
MainRouter.use("/product", ProductRouter);

export default MainRouter;
