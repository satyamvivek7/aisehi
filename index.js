import express from 'express';
let app = express();
import dotenv from 'dotenv';
dotenv.config();
let port =process.env.PORT ||4040;
import sequelize from './models/index.js';


//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Routes
app.get('/',(req,res)=>{
    res.status(200).json({
        message:`hii from satyam`,
        status:'success'
    })
})


//server port
app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`listining on port ${port}`)
})