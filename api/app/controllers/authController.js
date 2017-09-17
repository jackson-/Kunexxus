const bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../models')
const passport = require('passport');

module.exports = {
  signup : (req, res) => {
    const {email, username, password, linkedin, firstname, lastname, phone} = req.body
    const generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    User.findOne({
        where: {
            username: username
        }
    }).then(function(user) {
        if (user){
            return done(null, false, {
                message: 'That email is already taken'
            });
        } else {
            var userPassword = generateHash(password);
            var data = {
                    username:username,
                    email: email,
                    password: userPassword,
                    firstname: firstname,
                    lastname: lastname,
                    linkedin:linkedin,
                    phone:phone};
            User.create(data).then(function(newUser, created) {
                if (!newUser) {
                    return res.status(401).json({message:"Something went wrong"});
                }
                if (newUser) {
                    return res.status(200).json({user:newUser});
                }
            });
        }
      });
  },

  signin : (req, res) => {
    const {username, password} = req.body
    var isValidPassword = function(userpass, password) {
        return bCrypt.compareSync(password, userpass);
    }
    User.findOne({
        where: {
            username: username
        }
    }).then(function(user) {
        if (!user) {
            return res.status(401).json({message:"Username doesn't exist"})
        }
        if (!isValidPassword(user.password, password)) {
            return res.status(401).json({message:"Incorrect password"})
        }
        var userinfo = user.get();
        return res.status(200).json({user:userinfo});
    }).catch(function(err) {
        console.log("Error:", err);
        return res.status(401).json({message:"Something went wrong on login"})
    });
  },

  logout : (req, res) => {
    req.session.destroy((err) => {
      res.status(200).json({message:'Successful logout'});
    })
  },
}
