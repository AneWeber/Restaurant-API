import { ProductController } from "@/controllers/products-controller";
import { Router } from "express";

const productsRoutes = Router()
const productController = new ProductController()

productsRoutes.get("/", productController.index)
productsRoutes.post("/", productController.create)
productsRoutes.put("/:id", productController.update)
productsRoutes.delete("/:id", productController.remove)

export {productsRoutes}