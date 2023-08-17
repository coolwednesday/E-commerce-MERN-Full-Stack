import express from 'express'
import { createProductController } from '../controllers/productController.js';
import { isAdmin,requiresSignIn } from '../middlewares/authMiddleware.js';

const router=express.Router()

//routes
router.post("/create-product",
requiresSignIn,
isAdmin,
createProductController)

export default router;