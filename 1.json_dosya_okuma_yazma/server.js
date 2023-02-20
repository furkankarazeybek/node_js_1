const http=require('http')
const express=require('express')
const app=express();
const server=http.createServer(app);
const fs=require('fs')

const dir="./json"

server.listen(6002)
/*
app.use("/jsonYaz",(req,res,next)=>{

    const json=[
     {
        id:1,
        name:"Yasin",
        surname:"Dalkılıç"
    },
    {
        id:2,
        name:"Selman",
        surname:"Dalkılıç"
    }
];
     if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
     }

     fs.writeFile(dir+"/kullanicilar.json",JSON.stringify(json),'utf8',(err)=>{
        if(err) {
            res.send("Hata var")
        }
        else{
            res.send("Dosya Oluştu")
        }
     })

})

*/

app.use("/jsonOku",(req,res,next)=>{
    fs.readFile(dir+"/kullanicilar.json",(err,json)=>{
        if(err){
            res.send('Dosyayı Okuyamadım')
        }
        else{
            res.send(JSON.parse(json))  
        }
    })
})