const mail = require('@sendgrid/mail');
const express=require('express')
const app=express();
const router=express.Router();
const mailToken='SG.foXiVRQgQQ-ZUeUFLr-wRg.8EeOb4SgZ-MOzBP9Iwpk8977gfObMpqExeSErqbgSFU'


router.get('/',function(req,res){
    res.send('Merhaba')
})

router.get('/sendMail',function(req,res){
    res.send('Mail gönderilecektir')

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(mailToken)
    const msg = {
      to: 'femagle304@gmail.com', // Change to your recipient
      from: 'femagle304@gmail.com', // Change to your verified sender
      subject: 'Nodejs sendgrid mail gönderimi',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Mail gönderildi')
      })
      .catch((error) => {
        console.error(error)
      })
    })

app.use('/',router)
app.listen(5000)
console.log('5000 numaralı port')