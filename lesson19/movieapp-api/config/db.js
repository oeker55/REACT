const mongoose = require("mongoose")



module.exports = ()=>{
    mongoose.connect('mongodb://localhost:27017/movieappdb');
    
    mongoose.connection.on("open",()=>{console.log("Mongo DB Connected")} )
    mongoose.connection.on("error",(err)=>{console.log("Mongo DB -Connection Failed... Error : ",err)} )
}