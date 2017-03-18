const routes = require('express').Router();

//pg-promise config
const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);

//bcrypt
const bcrypt = require('bcrypt');

routes.get('/', (req, res) => {
      res.status(200).json({ message: `Connected to kunexxus.`});
});

routes.post('/register', (req, res) => {
  const {email, password} = req.body;
  // encrypt password
  bcrypt.hash(password, 10, (err, hash)=>{
    db.one(//insert user into db
      'INSERT INTO users (id, email, password) VALUES (DEFAULT, $1, $2) RETURNING *',
      [email, hash]
    ).catch((err)=>{//catch error if any
      console.log(err);
      res.status(400).json({ message: 'Unable to create user.'});
    }).then((user)=>{//set current session upon success
      req.session.user = user;
      res.status(200).json({ message: `User m@m.co created.`, sess_user: req.session.user});
    });
  });

});

routes.get('/current_session', (req, res)=>{
  if(req.session.user) res.status(200).json({ user: req.session.user});
});

routes.post('/login', (req, res)=>{
  //get form data
  const data = req.body;
  //get user from database
  db.one(
    'SELECT * FROM users WHERE email=$1', 
    [data.email]
  ).catch((err)=>{//catch error if any
    console.log(err);
    res.status(400).json({ message: 'E-mail or Password is incorrect.'});
  }).then((user)=>{
    bcrypt.compare(data.password, user.password, (err, cmp)=>{
      if(cmp){//password checks
        req.session.user = user;//set current session
        res.status(200).json({ message: 'You have logged in.'});
      }else{//send error
        res.status(400).json({ message: 'E-mail or Password is incorrect.'});
      }
    });
  });
});

routes.get('/logout', (req, res)=>{
  req.session.destroy((err)=>{
    res.status(200).json({ message: 'User logged out.' });
  });
});

routes.post('/signup', (req, res) => {
  // get form data
  const data = req.body;
  // encrypt password
  bcrypt.hash("password", 10, (err, hash)=>{
    db.one(//insert user into db
      'INSERT INTO users (id, email, password) VALUES (DEFAULT, $1, $2) RETURNING *',
      ["m@m.co", hash]
    ).catch((err)=>{//catch error if any
      console.log(err);
      res.status(400).json({ message: 'Unable to create user.'});
    }).then((user)=>{//set current session upon success
      req.session.user = user;
      res.status(200).json({ message: `User ${user.email} created.`});
    });
  });
});

module.exports = routes;
