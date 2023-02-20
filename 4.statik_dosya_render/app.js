const express=require('express')
const app=express();
const path=require('path')
const router=express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"))
})

router.get('/iletisim',function(req,res){
    res.sendFile(path.join(__dirname+"/iletisim.html"))

})

app.use("/",router);
app.listen(5000)
console.log("5000 nolu port")