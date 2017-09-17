const connectionsController = require('../controllers/connectionsController.js');


module.exports = require('express').Router()
    .get('/', connectionsController.fetchAll)
    .post('/', connectionsController.create)
    .get('/:id', connectionsController.getById)
