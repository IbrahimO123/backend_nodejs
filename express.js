const debug = require('debug')('exp:start')
const config = require('config');
const express = require('express');
const Joi = require('joi');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 5500

app.use(morgan('tiny'))
app.use(helmet())
app.use(express.urlencoded({ extended: true}))
app.use(express.static('outside'))

const customers = [
    { id:1, name:'John', age:34},
    { id:2, name:'Tolu', age:25},
    { id:3, name:'Simi', age:26},
    { id:4, name:'Kemi', age:18}
]

// console.log(`NODE ENV: ${process.env.NODE_ENV}`)
// console.log(`app get: ${app.get('env')}`) 


if ( app.get('env') === 'development' ) {
    app.use(morgan('tiny'))
    debug('Morgan is enabled ...');
}

debug("Application name: " + config.get('name'));
debug("Application host: " + config.get('mail.host'));
debug("Application password: " + config.get('mail.password'));

app.use(express.json());

app.get('/', (req,res) => {
  res.send('Hello, world!');
})

app.get('/api/customers', (req, res) => {
    res.status(200).send(customers);
})

app.get('/api/customers/:id', (req, res) => {
    let errMsg='Customer not found with the given Id'
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    if (!customer) {
        return res.status(404).send(errMsg)
    }
    else {
        return res.status(200).send(customer)
    }
})

app.post('/api/customers', (req, res) => {
    const customer = {
        id: customers.length + 1,
        name: req.body.name,
        age: req.body.age,
    };
     const {error,value} = validateCustomer(req.body);
    if(error) return res.status(404).send(error.details[0].message)
    else { 
        customers.push(customer)
        return res.status(202).send(value) }
   
})

app.put('/api/customers/:id', (req, res) => {
    const customer = customers.find((c) => c.id ===  parseInt(req.params.id))
    if (!customer) return res.status(404).send("Customer with the given id not found")
    const {error,value} = validateCustomer(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    else {
        customer.name = req.body.name;
        customer.age = req.body.age;
        return res.status(200).send(value)
        
    }
})

app.delete(("/api/customers/:id"), (req, res) => {
    const customer = customers.find((c) => c.id ===  parseInt(req.params.id))
    if (!customer) return res.status(404).send("Customer with the given id not found")
    const index = customers.indexOf(customer)
    customers.splice(index, 1);
    return res.status(200).send(customer);
})

function validateCustomer(customer){
    const schema = Joi.object({
        "name": Joi.string().min(3).required(),
        "age": Joi.number().min(18).required(),
    })
    const result = schema.validate(customer);
    return result;
}

app.listen(port, ()=>console.log(`Listening on port ${port} ...`));