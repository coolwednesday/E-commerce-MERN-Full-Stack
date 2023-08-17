import productModel from '../models/productModel.js'
import slugify from 'slugify';

export const createProductController= async(req,res)=>{
    try{
        const{name,description,slug,price,category,quantity,shipping,photo}=req.body;
        //validation
        console.log(name);
        if(!name){
            return res.status(500).send({
                    message:'Name is required'
                })
        }
                
        switch(true){
             
             case !description:
                return res.status(500).send({
                    message:'Description is required'
                })
             case !price:
                return res.status(500).send({
                    message:' Price is required'
                })
                 case !category:
                return res.status(500).send({
                    message:'Category is required'
                })
                 case !quantity:
                return res.status(500).send({
                    message:'Quantity is required'
                })
        }
        
        const products =new productModel({...req.body,slug:slugify(name)})
 await products.save()
 res.status(201).send({
    success:true,
    message:'Product Created Successfully',
    products,
 })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in creating product'
        })
    }

}