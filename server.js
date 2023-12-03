// Always this;
//
// import/require haru
// Mildeware haru
// routes
// listen

require('dotenv').config()//should be on top
const express = require('express')
const mongoose = require('mongoose');
const productrt=require('./routes/productRoutes')
const app = express()
app.use(express.json()) //so that application can accept json datatype 
app.use(express.urlencoded({extended:false}))
app.use('/api/products',productrt)
const M_url= process.env.Mongo_Url

app.get('/', function (req, res) {
  res.send('Hello World')
})

mongoose.connect(M_url)
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
