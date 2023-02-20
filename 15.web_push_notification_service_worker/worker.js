self.addEventListener('push',(e)=>{    //push edildiğinde veriyi yazdır
   
   
    self.registration.showNotification('Selam',{  //pcye bildirim

        
        body:e.body,
        icon:'https://cdn4.iconfinder.com/data/icons/seo-fourteen-black-and-white/128/button-turn_on-start-push-256.png',
        badge: "https://cdn2.iconfinder.com/data/icons/tools-and-devices/512/Push_Pin_2.png", //mobil ikon:badge
        vibrate: [100,100,100],  //titreşim
        actions: [
            {
                'action':'close',
                title:"Bildirimi kapat hemen",
                icon: "https://cdn2.iconfinder.com/data/icons/tools-and-devices/512/Push_Pin_2.png"
            },
            {
                'action':'lookMessage',
                 title:'Ali sana mesaj attı bir göz At',
                 icon:"https://cdn3.iconfinder.com/data/icons/e-face/128/_Face_with_Rolling_Eyes-256.png"
            }

        ]
     })  

   /*const json_data = e.data.json()
    console.log("json verisi:",json_data) */    //json verisi göndericeğimizde

   // console.log('e',e)   //consoleda bildirim
})

self.addEventListener('notificationclick',(event)=>{
    if(event.action = "lookMessage") {
        event.notification.close();
        clients.openWindow('https://www.google.com/')  //bu sayfayı açar
    }
})