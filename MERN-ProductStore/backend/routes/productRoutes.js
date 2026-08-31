import express from 'express';
import { addProduct, deleteProduct, getProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.get("/", getProduct);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


export default router;

