const express = require('express')
const app = express.Router()


const isAuth =  require("../helpers/isAuthorizedMware")

app.get('/abo?ut',isAuth, (req, res) => {// ? den  önceki karakter olsada olmasa da farketmez
    console.log("request from about page",req.url)
    res.render('about')
})
app.post('/abo?ut', (req, res) => {// ? den  önceki karakter olsada olmasa da farketmez
    console.log("request from about page",req.url)
    res.render('about')
})








module.exports = app

