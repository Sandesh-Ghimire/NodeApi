const express=require('express');
// const Product=require('../models/productModels')
const router = express.Router();
const {getProducts, updateProduct,createProduct,deleteProduct,getProduct}=require("../controllers/productcontroller")


router.get('/',getProducts)//all products


router.post('/',createProduct)

router.get('/:id',getProduct) //one product


router.put('/:id', updateProduct)


router.delete('/:id',deleteProduct)

module.exports=router;