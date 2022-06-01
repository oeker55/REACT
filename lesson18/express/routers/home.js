const express = require('express')
const app = express.Router()


app.get('/', (req, res) => {
    console.log("request from home page",req.url)
    res.render('serve')
})

module.exports = app;
