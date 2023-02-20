const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const jwt=require('jsonwebtoken')
const port=3000;
const router=express.Router();
const checkJwt=require('./auth'); //bu bir middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

router.post('/login',function(req,res,next){
    const {email} = req.body
    const token=jwt.sign({
        email:email,   //post edilir
        ad:'Yasin',
        exp:Math.floor(Date.now()/1000)+60,  //expire silinme süresi tokenin
        issuer:"www.furkan.com",
    },'secretKey')
    res.send(token) //token jwt.io'ya yapıştırılır.
})

router.post('/posts',checkJwt,function(req,res,next){
   res.send('<h2>Selam Dünya</h2')
})


router.get('/',function(req,res,next){
    res.send('Çalışıyorum')
})


app.use('/',router);
app.listen(port,function(){
    console.log(`localhost:${port} çalışıyor`)
})
