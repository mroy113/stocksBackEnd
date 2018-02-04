var mongoose = require('mongoose');

var stockModel = new mongoose.Schema({
   title: {
      type: String
   },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default:false}
});

module.exports = mongoose.model('Stock', stockModel);