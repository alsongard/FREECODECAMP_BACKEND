const myEventEmitter = require("events")

const customEmitter = new myEventEmitter()

customEmitter.on("response", (name, location)=>{
    console.log(`data recieved from ${name} at ${location}`)
});

customEmitter.emit('response', 'johnte', "Nairobi")