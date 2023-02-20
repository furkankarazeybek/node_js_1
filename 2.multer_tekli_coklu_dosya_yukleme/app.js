const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const path=require('path');
const cors=require('cors')
const singleFileUpload=require('./singleUpload')
const multipleFileUpload=require('./multipleUpload')



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.use("/multipleFileUpload",(req,res,next)=>{
    try{
      multipleFileUpload(req,res,function(err){
        if(err){
            console.log("error",err)
        }
        else{
            res.json(req.file).status(200)
        }
      })
    }
    catch(error){
        console.log('bir hata oluştu')
    }

})


app.use("/singleFileUpload",(req,res,next)=>{
    try{
      singleFileUpload(req,res,function(err){
        if(err){
            console.log("error",err)
        }
        else{
            res.json(req.file).status(200)
        }
      })
    }
    catch(error){
        console.log('bir hata oluştu')
    }

})
module.exports=app;