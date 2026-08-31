import mongoose from "mongoose";
import Product from "../models/product.js";

export async function getProduct(req,res){
    try{
        const products = await Product.find({});
        res.status(200).json({success:true, data:products})
    }catch(err){
        console.error("error in fetching products: ", err.message);
        res.status(500).json({success:false, message:"server error"});
    }
}

export async function addProduct(req,res){
    const product = req.body; //user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            success:false, message:"Please provide all fields"
        });
    };

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success:true, data:newProduct})
    }catch(err){
        console.error("Error in creating product: ", err.message);
        res.status(500).json({success:false, message:"server error"})
    }
} 

export async function updateProduct(req, res){

    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid id"});
    }

    try{
            const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
            res.status(200).json({ message: "Product updated successfully", updatedProduct });
        }catch(err){
            console.error(err);
            res.status(500).json({ message: "Internal server Error" });
        }
}

export async function deleteProduct(req, res) {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid id"});
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted successfully"});
    }catch(err){
        console.error("Error in deleting product: ", err);
        res.status(500).json({success:false, message:"Server error"});
    }
}