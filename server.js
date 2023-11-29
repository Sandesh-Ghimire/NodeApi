const express = require('express')
const app = express()
const mongoose = require('mongoose');
const productrt=require('./routes/productRoutes')

app.use('/api/products',productrt)
require('dotenv').config()
const M_url= process.env.Mongo_Url

app.use(express.json()) //so that application can accept json datatype 
app.use(express.urlencoded({extended:false}))

app.get('/', function (req, res) {
  res.send('Hello World')
})
// J1DFmAPCN0J8eMjm


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
