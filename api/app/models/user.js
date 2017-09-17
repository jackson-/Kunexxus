
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    firstname: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    lastname: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    username: {
      type: Sequelize.TEXT,
    },

    phone: {
      type: Sequelize.BIGINT,
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },

    linkedin: {
      type: Sequelize.TEXT,
    },


    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    last_login: {
      type: Sequelize.DATE,
    },
  });

  return User;
};
