const express = require("express")


const app =express()


app.get("/",(req, res)=>{

    res.send("Hello Express JS !!!")
})

app.listen(3000)