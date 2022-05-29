const fs = require("fs");
const file = "video.mp4";
const myReadStream = fs.createReadStream(file);

let dataSize = 0;
let count = 0;
let per = 0;
let progress = 0;


fs.stat(file, (err, data) => {
    dataSize = data.size;
    console.log("total data size ", dataSize, "byte");
  });

myReadStream.on("data", (Chunk) => {
  progress += Chunk.length;
  per = (progress * 100) / dataSize;
  console.log(++count, ". Chunk is coming...", Chunk.length , "byte");

  console.log("total progress", Math.floor(per), "%");
});



myReadStream.on("end", () => {
  console.log("Stream finished!!!");
});
