const express = require('express')
const app = express.Router()



app.get('/help', (req, res) => {res.send('Hello to products page(GET)')})
.post('/help', (req, res) => {res.send('Hello to products page(POST)')})
.put('/help', (req, res) => {res.send('Hello to products page(PUT)')})
.delete('/help', (req, res) => {res.send('Hello to products page(DELETE)')})

//yukarıda yazılı olmayan methodları da all karşılar
app.all('/help', (req, res) => {res.send('Hello to products page(all)')})








module.exports = app