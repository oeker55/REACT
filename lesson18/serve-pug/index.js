const express = require('express')
const app = express()
const port = 3000
app.set("view engine", "pug")

//  app.get('/', (req, res) => res.send('Hello World!'))
 app.get('/', (req, res) => res.render('index',{name:"Deja",phone:"(890) 868-4504 x6310", company:"Runolfsson, D'Amore and Walker"}))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
