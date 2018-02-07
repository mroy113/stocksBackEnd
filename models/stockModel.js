var mongoose = require('mongoose');

var stockModel = new mongoose.Schema({
    ID: {type: String},
    companyName: {type: String},
    companyURL: {type: String},
    price_current: {type: String},
    price_yesterday: {type: String}
});

module.exports = mongoose.model('Stock', stockModel);