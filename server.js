//const express= require('express'); present in ES5
//const colors = require('colors');
// we added type as module in package.json so we can use import export now as in ES6
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import cors from 'cors';
import productRoutes from './routes/productRoute.js';




dotenv.config()//if env file is present in some other folder then we write dotenv.config({path:''}), here it is in root , hence we dont need to define it.
//PORT
connectDB();

const PORT=process.env.PORT||8080;
//rest object
const app = express();

//rest api
//url and callback function with parameter req and response
//react port is 3000
//angular port is 4200 and node is used at 8000 or 8080

//middlewares
app.use(cors());
app.use(express.json())//in request and response we can also send json type of data, before we had to use bodyparser but now express has this feature by default. hence we just call it.
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes)


    //run that is listen, we use callback function here as well.
    app.listen(PORT,()=>{
        console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
    });


app.get('/',(req, res)=>{
    res.send("<h1>Welcome to E-commerce App</h1>");
});
   