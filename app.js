var express = require('express'),
    mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stocksAPI');
var app = express();

//removes security requirements cross site http requests
//DANGER - DO NOT GO LIVE WITH THESE SETTINGS - LOCALHOST ONLY
setCorsAccessControl();

require('./routes/stock.routes')(app);

//set listener for http requests
initPortListener();

function setCorsAccessControl() {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });
}
function initPortListener() {
    var port = process.env.PORT;
    app.listen(port, function(){
        console.log('running on port ' + port)
    });


}
