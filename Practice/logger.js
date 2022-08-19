const EventEmitter = require('events')
const emitter = new EventEmitter();

//Register an event listener
emitter.on('messageLogged', (arg) => console.log(arg) )

//Register an event listener for Logging
emitter.on('logging', (arg) => console.log(arg) )

//Raise an events
emitter.emit('messageLogged',{id:1, url: 'http://localhost:8080'});

//Raise an events for logging
emitter.emit('logging',{data:'We are logging into the server...' });