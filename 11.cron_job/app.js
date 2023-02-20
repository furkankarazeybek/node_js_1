const cron = require('node-cron')

/* 
cron'a emir verme, cron' a her ayın 1inde ödeme emrini başlat,
3 ayda bir veritabanı yedeği al
haftanın her belirli 3 günü kullanıcılara mail gönder
her dakika database'yi tara gibi

https://crontab.cronhub.io/ kullabilir.
*/

cron.schedule('* * * * *',function(){
     console.log('Cron','Ben her dakika çalışırım');
})

cron.schedule('* * * * * *',function(){
    console.log('Cron','Ben her saniye çalışırım');

})