var express = require('express');
var router = express.Router();
var galeriaModel = require('./galeria.model');


// http://localhost:3000/api/galeria/galeria/all
router.get('/galeria/all', (req, res)=>{
    return res.status(200).json(galeriaModel.getAll());
});

// http://localhost:3000/api/galeria/galeria/id
router.get('/galeria/:id',(req, res)=>{
    var id = parseInt( req.params.id );
    var galeria = galeriaModel.getById(id);
    return res.status(200).json(galeria);
});
module.exports = router;
