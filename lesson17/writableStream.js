const fs = require("fs")
const path = require("path")


const file = "video.mp4"
const fileExt =  path.extname(file)

const myReadableStream = fs.createReadStream(file)

const myWritableStream = fs.createWriteStream("video01"+fileExt)

myReadableStream.pipe(myWritableStream)

myWritableStream.on("finish",()=>{
    console.log("Write process succesful")
})