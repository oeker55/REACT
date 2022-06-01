const express = require('express')
const app = express.Router()





app.get("/users",(req, res,next)=>{
    const user = false
    if (user) {
        res.send("Users is there")
        
    } else {
        next({status:404, message : "user is not found"})
    }
    })

    

app.get("/users/:id",(req, res)=>{res.send("User Id : "+ req.params.id)})













module.exports = app