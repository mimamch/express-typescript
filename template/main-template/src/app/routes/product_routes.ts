import { Router } from "express";
import { getProducts } from "../controllers/product_controllers";

const ProductRouter = Router();

ProductRouter.get("/", getProducts);

export default ProductRouter;
