const express=require('express')
const app=express();
const router=express.Router();
const fs=require('fs')

const loggerText=fs.createWriteStream(new Date().toLocaleDateString()+'.txt',{
    flags:'a'
})

const loggerMiddleware=(req,res,next)=>{
    const {id}=req.params
    const readText=`Request URL : ${req.originalUrl}, Method : ${req.method}, Parametre Var mı : ${id ? 'EVET':'HAYIR'}, Parametre : ${id ? id : 'HAYIR'}`+'\r\n'
    loggerText.write(readText)
    next();
}

router.get("/",[loggerMiddleware], function(req,res,next){
    res.send("home")
})


router.get("/user",[loggerMiddleware],function(req,res,next){
    res.send("user")
}) 

router.get("/user/:id",[loggerMiddleware],function(req,res,next){
    res.send(req.params.id)
})

app.use("/",router)
app.listen(4000)
