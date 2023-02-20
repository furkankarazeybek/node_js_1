const webPush=require('web-push')
const express=require('express')
const app= express();
const router = express.Router();
const bodyParser = require('body-parser')

const port = 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



//console.log(webPush.generateVAPIDKeys())   //public ve private key verir

const vapidKeys = {
    publicKey: 'BBFS2xw0p1mMf1JvhCu1XMt3V7Zjlq4GHgK3nNr7pGB-UjeLysMPOwsD4U3xsDBCtca9GdtQr5fzHpp3I9asMhw',
    privateKey: 'kC96_AQHp0lBpbu0L21Vswea8iTUI9IL4oS3CMns01U'
}

const subscriberClient = 
    {"endpoint":"https://fcm.googleapis.com/fcm/send/fUxwA_KR6TQ:APA91bFqhE3o42Au7o0xxniwPLDtke_Ta-z3TlmU7GOKf25CbH7Zy2AaZ0okUk6RnGSK8wR2Gbk77iWHnBrzMHo-Ht8jDM_aMLKAjlQTLpcgNGIaytBKmeAGPtPmXFldbmHunda3uZer","expirationTime":null,"keys":{"p256dh":"BAkJCg6qsklJlozvllJ4C63YPOBwN8Io-wZHSDDlXHgMvxvOTktCrU74PqqR69b0EnpSuDiLGw2MRV4NAf3k9Qw","auth":"AUQMpeQ0lnBzPdBi4rRdyA"}}
  


webPush.setVapidDetails('mailto:femagle304@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey);
//webPush.sendNotification(subscriberClient,'Yeni ürünlerimize göz atmak ister misinz ?');



//bu kısma kadar apisizdi
//APİ İLE BİLDİRİM GÖNDERİMİ

router.get('/',(req,res,next) => {
   res.send('Çalışıyorum')
})

router.post('/deneme',(req,res,next) => {
      const {post} = req.body;
      webPush.sendNotification(subscriberClient, JSON.stringify(post));
      res.status(200).json({msg: 'Bildirim gitti'})


});

app.use('/',router)
app.listen(port,()=> {
    console.log(`${port} çalışıyor`)
})