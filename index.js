let express = require('express') ;
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port =process.env.PORT ||4040;
require('./models/index.js');

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