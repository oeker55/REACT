const fs = require("fs")


fs.appendFile("demoWrite00.txt","Hello BackEnd!!",
(err)=>{
    if(err){
        console.log(err)
    }
    
    console.log("added text with appendFile() method...")
})
fs.writeFile("demoWrite01.txt","Hello BackEnd!!",
(err)=>{
    if(err){
        console.log(err)
    }
    
    console.log("added text with writeFile() method...")
})
