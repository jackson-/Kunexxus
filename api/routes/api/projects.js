var router = require('express').Router();
var passport = require('passport');
var mongoose = require('mongoose');
var Project = mongoose.model('Project');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var auth = require('../auth');

router.param('project', function(req, res, next) {
  Project.findById(req.payload.id).then(function(project){
    if(!project){ return res.sendStatus(401); }

    return res.json({user: project.toAuthJSON()});
  }).catch(next);
});

router.get('/', auth.optional, function(req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  return Promise.all([
    Project.find(query)
      .limit(Number(limit))
      .skip(Number(offset))
      .sort({createdAt: 'desc'})
      .populate('author')
      .exec(),
    Project.count(query).exec(),
  ]).then(function(results){
    var projects = results[0];
    var projectsCount = results[1];
    console.log("PORJECTS",projects)
    return res.json({
      projects: projects.map(function(p){
        return p.toJSONFor(user);
      }),
      projectsCount: projectsCount
    });
  }).catch(next);
});

router.post('/', function(req, res, next){
  console.log("CREATING PROJECT", req.body)
  // var user = new User();
  // user.email = req.body.user.email;
  // user.setPassword(req.body.user.password);
  //
  // user.save().then(function(){
  //   var r = {user: user.toAuthJSON()}
  //   console.log("FINISHED SAVING USER", r)
  //   return res.json(r);
  // }).catch(next);
  // res.json({status:200})
});

module.exports = router;
