const os=require('os') //opeation systems
const path=require('path')
const {exec} = require('child_process')
const fs=require('fs')
const desktopDir=path.join(os.homedir(),"Desktop")


console.log('desktop',desktopDir)
const prompts = require('prompts');
const array=[]

fs.readdir(desktopDir,function(err,files){
    if(err){
        console.log("hata var",err)
      }
      console.log(files.length)  //masaüstü dosya,klasör sayısı

      /* files.forEach((file)=>{     //masaüstü dosyaları sıralama
          console.log('file',file)
      }) */
      
      files.forEach((file)=>{     //masaüstü dosyaları prompts seç
      array.push({title:file,value:file,description:"Npm start demeden önce bir proje seç"})
      });


      (async () => {
        console.log('array',array)
        const response = await prompts({
            type:'select',
            name: 'value',
            message: 'Çalıştırmak istediğiniz bir proje seç',
            choices: array,
        });
        exec('npm start',{cwd:path.join(desktopDir,response.value)},function(err,stdout,stderr){  //npm startla çalışan projeleri çalıştırır
            if(err){
                console.log('hata var',err)
                return
            }
            if(stderr) {
                console.log('std hata var',stderr)
                return
            }
            console.log('stdout',stdout)
        })
        console.log(response);
      })();





})




 /* exec("dir",{cwd:process.cwd()},function(error,stdout,stderr){
    if(error){
        console.log('hata var',error)
    }
    if(stderr) {
        console.log('std hata var',stderr)
    }
    console.log('stdout',stdout)


}  */