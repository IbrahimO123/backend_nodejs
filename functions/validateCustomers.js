const Joi = require('joi');


function validateCustomer(customer){
    const schema = Joi.object({
        "name": Joi.string().min(3).required(),
        "age": Joi.number().min(18).required(),
    })
    const result = schema.validate(customer);
    return result;
}

module.exports = validateCustomer;