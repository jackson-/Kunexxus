
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};


fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('Request' === modelName) {
    db[modelName].belongsTo(db.User, {
      as:'requester'})
    db[modelName].belongsTo(db.User, {
      as:'requested'})
  } else if ('User' === modelName){
    db[modelName].hasMany(db.Connection, {
      as:'connections'})
  } else if ('Connection' === modelName){
    db[modelName].belongsTo(db.User, {
      as:'user'})
    db[modelName].belongsTo(db.User, {
      as:'connected'})
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
