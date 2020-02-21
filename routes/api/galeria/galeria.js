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

// http://localhost:3000/api/galeria/galeria/new
router.post('/galeria/new', (req, res)=>{
    var datosEnviados = req.body;
    var newGaleria = galeriaModel.addNew(datosEnviados);
    return res.status(200).json(newGaleria);
});

// http://localhost:3000/api/galeria/galeria/upd/:id
router.put('/galeria/upd/:id',(req, res)=>{
    var id = parseInt(req.params.id);
    var updGaleria = galeriaModel.update(id, req.body);
    res.status(200).json(updGaleria);
});
module.exports = router;
