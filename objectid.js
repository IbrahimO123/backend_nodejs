const mongoose = require('mongoose');

const id = mongoose.Types.ObjectId();
let time = id.getTimestamp();
console.log(time);
console.log(id);


//MongoDb Driver generate the ObjectId
//We have 24 charcaters in the ObjectId
//2 characters equal 1 byte

// first 4 characters -> Timestamp
// next 3 characters -> machine Identifier
// next 2 characters -> process identifier
// next 3 character -> counter
 
// Since 1 byte = 8 bits and 1 bit = 1 or 0 
// therefore we can generate 2^8 = 256 numbers in 1 byte
// 3 bytes = 2^24 = 16M numbers