const readLine=require('readline')
const readLineConsole=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

readLineConsole.question("Yaşınız Kaç ? ",function(year){
    if(year>18){
        readLineConsole.question("Adınız Nedir ",function(name){
            console.log(`Merhaba, ${name} sizin yaşınız ${year} olduğu için sistemimize giriş yapabilirsiniz`)
            process.exit(0) 

        })
    }else{
        readLineConsole.close();
    }
})
readLineConsole.on("close",function(){   //readLineConsole close olduğunda
   
    console.log("Yaşınız Uygun Değil, giriş yasak");
    process.exit(0)  //cevap vermeden consoledan çıkar
}) 