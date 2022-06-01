const express = require('express')
const app = express.Router()




app.get('/produc+ts', (req, res) => {//+ operatöründen önceki karakteri istediğimiz kadar kullanabiliyoruz(en az bir defa)
    console.log("request from about page", req.url)
    res.send('Hello to products page')
})







module.exports = app