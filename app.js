var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/stocksAPI');
var Stock = require('./models/stockModel');
var app = express();
var port = process.env.PORT || 3000;
var stockRouter = express.Router();

stockRouter.route('/stocks')
   .post(function(req, res){
        var stock = new Stock(req.body);
        console.log(stock);
        res.send(stock);
    })
    .get(function(req, res){
        Stock.find(function(err,stocks){
            if(err){
                res.status(500).send(err);
            } else{
                res.json(stocks);
            }
        });
    });

stockRouter.route('/Stocks/:stockId')
    .get(function(req,res){
        Stock.findById(req.params.stockID, function(err,stock){
            if(err){
                res.status(500).send(err);
            } else{
                res.json(stock);
            }
        });
    });

app.use('/api', stockRouter);

app.get('/', function(req, res){
   res.send('welcome the stocks backend');
});


app.listen(port, function(){
    console.log('running on port ' + port)
});