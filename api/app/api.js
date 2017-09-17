'use strict'
const api = require('express').Router()

module.exports = api
  .use('/auth', require('./routes/auth'))
  .use('/connections', require('./routes/connections'))
  .use('/requests', require('./routes/requests'))
  .use((req, res) => res.status(404).end()) // No routes matched? 404.
