import express  from "express";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
import { requiresSignIn,isAdmin } from '../middlewares/authMiddleware.js';

const router=express.Router()

//routes
//create category
router.post('/create-category',requiresSignIn, isAdmin, createCategoryController)
//update category
router.put('/update-category/:id',requiresSignIn, isAdmin, updateCategoryController)
//get all categories
router.get('/get-category', categoryController)
//single category
router.get('/single-category/:slug', singleCategoryController)
//delete category
router.delete('/delete-category/:id',requiresSignIn, deleteCategoryController)

export default router;