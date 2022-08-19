const debug = require('debug')('exp:start')
const config = require('config');
const express = require('express');

const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 5500
const customers = require('./routes/customer');
const landing = require('./routes/home');


app.use('/',landing);
app.use('/api/customers', customers)
app.use(morgan('tiny'))
app.use(helmet())
app.use(express.static('outside'))

// console.log(`NODE ENV: ${process.env.NODE_ENV}`)
// console.log(`app get: ${app.get('env')}`) 
if ( app.get('env') === 'development' ) {
    app.use(morgan('tiny'))
    debug('Morgan is enabled ...');
}

// debug("Application name: " + config.get('name'));
// debug("Application host: " + config.get('mail.host'));
// debug("Application password: " + config.get('mail.password'));


app.listen(port, ()=>console.log(`Listening on port ${port} ...`));