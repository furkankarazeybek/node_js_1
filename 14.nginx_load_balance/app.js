const express=require('express')
const router=express.Router();
const PORT= process.argv[3] || 3000;
const app= express();

const instanceName=process.env.NODE_APP_INSTANCE || 0;

const Array = [
    {
        name: "Yasin Dalkılıç",
        id:1
    },
    {
        name: "Selin Dalkılıç",
        id:2
    },
    {
        name: "Günseli Dalkılıç",
        id:3
    },
    {
        port: instanceName
    }
]


app.get('/',(req,res,next) => {
    res.status(200).json(Array)
})

app.use('/',router)

app.listen('300'+instanceName,() => {
    console.log("Çalışıyor" + "300" + instanceName)
})

//Uygulama ölçeklendirme
//300 istek localhost:3000'e
//400 istek localhost:3001'e
//300 istek localhost:3002'e

