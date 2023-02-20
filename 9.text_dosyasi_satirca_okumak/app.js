const fs=require('fs')   //filesystem
const readline=require('readline')


let satir=0;
let harf=0;
let kelime=0;
function textOku(){
   const fileStream=fs.createReadStream('test.txt')
   const ri=readline.createInterface({
    input:fileStream
   })

   ri.on('line',function(line){
    satir++;
    harf = harf+line.trim().length;  //trim() boşluklardan kurtulma
    kelime= kelime+line.split(' ').length;
    console.log('line',line)
   })

   ri.on('close',function(){
     console.log('Okunan Toplam Satır : '+' '+satir)
     console.log('Okunan Toplam Harf Sayısı: '+' '+harf)
     console.log('Okunan Toplam Kelime Sayısı: '+' '+kelime)

     console.log('okuma bitti')
   })
}

textOku();