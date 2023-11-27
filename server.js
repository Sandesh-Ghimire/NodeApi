const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product=require("./models/productModels")

app.use(express.json()) //so that application can accept json datatype 
app.use(express.urlencoded({extended:false}))

app.get('/', function (req, res) {
  res.send('Hello World')
})
// J1DFmAPCN0J8eMjm

app.get('/products',async(req,res)=>
{
  try {
    const product=await Product.find({});
    res.status(200).json(product)
  } catch (error) {
    
   res.status(500).json({message: error.message});
    
  }

})


app.post('/products',async(req,res)=>
{
  try {
        const products= await Product.create(req.body);
        res.status(200).json(products);
  } catch (error) {
    console.log(error.message)
   res.status(500).json({message: error.message})
  }
  //  res.send(req.body)
})

app.get('/products/:id',async(req,res)=>
{
  try {
    const {id}= req.params;
    const product=await Product.findById(id);
    res.status(200).json(product)
  } catch (error) {
    
   res.status(500).json({message: error.message});
    
  }

})


app.put("/products/:id", async(req,res)=>
{
  try {
    const{id}= req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
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


app.delete("/product/:id",async(req,res)=>
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

mongoose.connect('mongodb+srv://<db username>:<dbpass>@testing.lbmj2pf.mongodb.net/nodeapi?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected!')
    app.listen(3000,() => {
console.log("your app is up and runnning.")
    })
    
    
})
  .catch((error) => {
  {
    console.log("error while connection")
  }
}
)
