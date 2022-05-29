const http = require("http")

const myServer = http.createServer((request, response)=>{
    console.log("What is this ?")
    console.log("Request : "+request.url)
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    // response.write(`<h1 style="text-align:center "> Hello NodeJs ÖZGÜR</h1>` )
    response.end(`<h1 style="text-align:center "> Hello NodeJs ÖZGÜR with nodemon</h1>`)

})
myServer.listen(3000)
