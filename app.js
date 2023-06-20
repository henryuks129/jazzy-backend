const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const jazzyRouter = require('./router/jazzyRouter')

// CONFIGURATION VARIABLES
require("dotenv").config();

// CORS MIDDLEWARE
app.use(cors());

// MIDDLEWARE (FOR JSON USAGE)
app.use(express.json());

// ENVIRONMENTAL VARIABLES
const db_url = process.env.DBURL; 
const port = process.env.PORT || 5000;

// MONGO_DB CONNECTION
const connect = ()=>{
    mongoose.connect(db_url);
    try{
        console.log('DB Connection Authenticated');
    } catch (err){
        console.log({err: err});
    }
}

// ROUTES
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

// ROUTES MIDDLEWARE
app.use('/burgers', jazzyRouter)

// SERVER
app.listen(port,()=>{
    console.log('DB Connection Established');
    connect()
})