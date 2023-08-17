import express from 'express';
import {registerController,loginController,testController,forgotPasswordController} from '../controllers/authController.js';
import { requiresSignIn,isAdmin } from '../middlewares/authMiddleware.js';


//router object..if we do routing in a seperate file then we need to declare a routing object

const router = express.Router()

//routing
//For register we post
//when we will import it in server.js we will add the api there, 
// the callback function is written but as we are following the mvc pattern we will create it in controller folder.
router.post('/register', registerController);
//Login
router.post('/login', loginController);
//Forgot Password ||POST
router.post('/forgot-password',forgotPasswordController)
//test route
router.get('/test',requiresSignIn,isAdmin,testController)

//protected route auth
router.get('/user-auth', requiresSignIn, (req,res)=>{
    res.status(200).send({ok:true});
});

//protected auth for admin
router.get('/admin-auth', requiresSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
});
export default router;