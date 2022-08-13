const express = require('express');
const home = express.Router();

home.get('/', (req,res) => {
    res.send('Hello, world!');
  })
  

module.exports = home;