const mongoose = require("mongoose")

module.exports = () =>{
    mongoose.connect("mongodb://localhost:27017/movies5")
    mongoose.connection.on("open",()=>{console.log("Succesful Connection to Mongo DB")})
    mongoose.connection.on("error",()=>{console.log("Failed Connection to Mongo DB")})
}