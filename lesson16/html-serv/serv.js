const fs = require("fs")
const http = require("http")

const myServer = http.createServer((req, res)=>{

fs.readFile("ozgur.html",(err, data)=>{
if (err) {
    throw err
} else {
    res.end(data)
}
})



})

myServer.listen(3000)