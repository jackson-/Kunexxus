
const Meetup = require('../models').Meetup;

module.exports = {

  fetchAll : (req, res) => {
    Meetup.findAll()
      .then((meetups) => {
        res.status(200).json(meetups)
      })
  },

  create : (req, res) => {
    Meetup.create(req.body)
      .then((meetup) => {
        res.status(200).json(meetup)
      })
  },

  getById : (req, res) => {
    Meetup.findById(req.params.id)
      .then((meetup) => {
        res.status(200).json(meetup)
      })
  },

}
