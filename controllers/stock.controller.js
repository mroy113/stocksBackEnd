var Stock = require('../models/stockModel');

exports.findAll = function(req,res){
    Stock.find(function(err,stocks){
        if(err){
            res.status(500).send(err);
        } else{
            res.json(stocks);
        }
    });
};

exports.update = function(req,res){
    Stock.findById(req.params.ID, function(err,stock){
        if(err){
            res.status(500).send({message: "cant find stock with id " + req.params.ID});
        } else {
            stock.ID = req.body.ID;
            stock.companyName = req.body.companyName;
            stock.companyURL = req.body.companyURL;
            stock.price_current = req.body.price_current;
            stock.price_yesterday = req.body.price_yesterday;
            stock.save(function (err, data) {
                res.send(data)
            });
        }
    });
};