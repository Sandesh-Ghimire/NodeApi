
//get all products from db
const asyncHandler = require('express-async-handler')
const Product= require('../models/productModels')
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

// create a product
const createProduct = asyncHandler(async(req, res) => {
  try {
    console.log(req.body)
      const product = await Product.create(req.body)
      res.status(200).json(product);
      console.log(req.body)

  } catch (error) {
      res.status(500);
      throw new Error(error.message);
  }
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