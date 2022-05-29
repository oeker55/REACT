// call events lib/module/pacakage

const events = require("events")
// extract eventEmitter Func.
const eventEmitter = new events.EventEmitter()
// define variables
const data0 = "özgür"
const data1 = {
    name:"özgür",
    surname:"eker"
}
// define events
eventEmitter.on("event01", (name)=>{
    console.log(`isim = ${name}`)
})
eventEmitter.on("event02",(user)=>{
console.log(`isim = ${user.name} ve soyisim = ${user.surname}`)
})

/// once usage
eventEmitter.once("OnlyOne", ()=>{
    console.log("Merhaba Dünya")
})

// run events like above
eventEmitter.emit("event01",data0)


eventEmitter.emit("event02",data1)

// event should run fourth but defined with once ,so  event runned once
eventEmitter.emit("OnlyOne")
eventEmitter.emit("OnlyOne")
eventEmitter.emit("OnlyOne")
eventEmitter.emit("OnlyOne")
