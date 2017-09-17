
const {Request} = require('../models');

module.exports = {

  create : (req, res) => {
    const {requesterId, requestedId, status} = req.body
    Request.create(req.body)
      .then((request) => {
        res.status(200).json(request)
      })
  },

  getMyRequests : (req, res) => {
    Request.findOne({
        where: {
            requester_id: req.params.id
        }
    }).then((requests) => {
      res.status(200).json(requests)
    })
  },

  getRequesters : (req, res) => {
    Request.findOne({
        where: {
            requested_id: req.params.id
        }
    }).then((requests) => {
      res.status(200).json(requests)
    })
  },

}
