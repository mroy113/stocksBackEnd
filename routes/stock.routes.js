module.exports = function(app) {
    var stockController = require('../controllers/stock.controller');
    app.get('/api/stocks', stockController.findAll);
    app.put('/api/stocks/:ID', stockController.update);
};