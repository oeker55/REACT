const express = require('express')
const app = express.Router()





app.get('/cont*act', (req, res) => {//* ın olduğu yere ne yazarsan yaz contact olarak algılanır
    console.log("request from contact page",req.url)
    res.send('Hello to contact page')
})






module.exports = app