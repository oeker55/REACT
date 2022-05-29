const fs = require("fs")
fs.unlink("willDelete.js",
(err)=>{
    if(err){
        // console.log(err)
        // yukarıdaki gibi clg(err) değil de throw err yazılırsa hatayı konsolda gösterir ve aşağıdaki stıra geçmeden çalışmayı durdurur.
        throw err
    }
    console.log("File deleted...")

})