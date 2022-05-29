const events = require("events")
const eventEmitter = new events.EventEmitter()

eventEmitter.on("merhaba", ()=>{
    console.log("Merhaba")
})

eventEmitter.emit("merhaba")

