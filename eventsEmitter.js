const EventEmitter = require('events')

class Logger extends EventEmitter {

    log (message) {
        console.log(message);

        //Raise an events
        this.emit('messageLogger', {message:'I hope it works the way I think'})
    }

}

module.exports = Logger;