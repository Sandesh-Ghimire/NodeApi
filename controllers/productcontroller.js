const Product= require('../models/productModels')
//get all products from db
const asyncHandler = require('express-async-handler')
//get all products
const getProducts = asyncHandler(async(req,res)=>
{
  try {
    const products=await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    
   res.status(500).json({message: error.message});
    
  }
})


const deleteProduct=asyncHandler(async(req,res)=>
{
  try {
    const {id}=req.params;
    const product= await Product.findByIdAndDelete(id);
    if(!product)
    {
      return res.status(404).json({message:`can't find the product with this id ${id}`})
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message: `hello not deleted`})
  }
})
const createProduct=asyncHandler(async(req,res)=>
{
  try {
        const product= await Product.create(req.body);
        res.status(200).json(product);
  } catch (error) {
    // console.log(error.message)
   res.status(500).json({message: error.message})
  }
  //  res.send(req.body)
})

const updateProduct=asyncHandler(async(req,res)=>
{
  try {
    const{id}= req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //if we can't find product in db then
    if(!product)
    {
      return res.status(404).json({message: `cant find product by id ${id}`})
    }
    const updatedproduct= await Product.findById(id);
    res.status(200).json(updatedproduct);
    
  } catch (error) {
    res.status(500).json({message: error.message})
    
  }
})

const getProduct= asyncHandler(async(req,res)=>
{
  try {
    const {id}= req.params;
    const product=await Product.findById(id);
    res.status(200).json(product)
  } catch (error) {
    
   res.status(500).json({message: error.message});
    
  }

})

module.exports=
{
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    getProduct

}