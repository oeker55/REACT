const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "pug")

app.use(express.static("public"))
app.use(express.static("public-2"))

const about = require("./routers/about")
const contact = require("./routers/contact")
const help = require("./routers/help")
const home = require("./routers/home")
const products = require("./routers/products")
const user = require("./routers/user")

const isAuthorizedMware = require("./helpers/isAuthorizedMware")

app.use("/contact",isAuthorizedMware)


app.use("/", about)
app.use("/", contact)
app.use("/", help)
app.use("/", home)
app.use("/", products)
app.use("/", user)




app.use((err,req,res,next)=>{
res.status(err.status)
res.render("error.pug",{errStatus:err.status, message : err.message})

})


// 



app.listen(port, () => console.log(`Example app listening on port ${port}!`))