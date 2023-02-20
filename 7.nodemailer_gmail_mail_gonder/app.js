const nodemailer=require('nodemailer')

const mail=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"femagle304@gmail.com",
        pass:"dlzgzrekihrxcsel"  //uygulaama şifresi
    }
})

const mailOptions={
    from:"femagle304@gmail.com",
    to:"furki304@gmail.com",
    subject:"Nodejs Mail Gönderme Konusu",
    text:"Merhaba Dünya Nasılsın <h1> İyi Günler </h1>",
    attachments:[
        {
           filename:"text.txt",
           content:"Merhaba"
        },
        {
            filename:"deneme.txt",
            path:"deneme.txt"
        },
        {
            filename:"resim.jpeg",
            path:"https://lh3.googleusercontent.com/a/AEdFTp6DJTuG7aWTxevh8_RxzSOcxr5-QXuK_JbltYOTpQ=s40-p"
        }
    ]
}
mail.sendMail(mailOptions,function(error,info){
    if(error){
       console.log('error',error)
    }
    else{
        console.log("mail infosu",info)
    }
})