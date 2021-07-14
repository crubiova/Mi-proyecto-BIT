const express = require('express');
const UserController = require('../controllers/UserController');
const api = express.Router();

api.get("/saludar",(req, res) => {
    console.log('Llego a la ruta saludar...');

});

api.post('/', UserController.create);
api.put('/:idUser', UserController.update);



module.exports = api;