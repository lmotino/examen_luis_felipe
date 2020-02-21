var express = require('express');
var router = express.Router();
// Roters de Entidades
var galeriaRouter = require('./galeria/galeria');

router.use('/galeria', galeriaRouter);

//http://localhost:3000/api/verison
router.get('/version', function(req, res){
    res.status(200).json({"Version":"API v1.0"});
});

module.exports = router;