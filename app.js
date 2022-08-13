const Logger = require('./eventsEmitter')
const EventEmitter = require('events')
const path = require('path')
const fs = require('fs')
let nameUser = "Ibrahim"
function callUserName( nameUser) {
    console.log(nameUser)
} 
// const files = fs.readdirSync('./')
// console.log(files)
const logger = new Logger();  

// const file = fs.readdir('.', (err, files) => {
//    if (err) { return console.log('Error: ' + err)}
//    else { return console.log(files) }
// })


//Listen to an events for messageLogger
logger.on('messageLogger', (arg)=> console.log(arg))

logger.log('logger should be initialized')