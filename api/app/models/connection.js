
module.exports = (sequelize, Sequelize) => {
  const Connection = sequelize.define('Connection', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    email: {
      type: Sequelize.BOOLEAN,
      defaultValue:false,
    },

    linkedin: {
      type: Sequelize.BOOLEAN,
      defaultValue:false,
    },

    phone: {
      type: Sequelize.BOOLEAN,
      defaultValue:false,
    },
    
  });

  return Connection;
};
