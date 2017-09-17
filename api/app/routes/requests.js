const requestsController = require('../controllers/requestsController.js');


module.exports = require('express').Router()
    .post('/', requestsController.create)
    .get('/:id', requestsController.getMyRequests)
    .get('/requesters/:id', requestsController.getRequesters)
