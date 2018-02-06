var mongoose = require('mongoose');

var stockModel = new mongoose.Schema({
   companyName: {type: String},
    url: {type: String},
    price_current: {type: String},
    price_yesterday: {type: String}
});

module.exports = mongoose.model('Stock', stockModel);