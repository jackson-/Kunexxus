
module.exports = (sequelize, Sequelize) => {
  const Request = sequelize.define('Request', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.ENUM('pending', 'accepted', 'denied'),
      defaultValue: 'pending',
    },
  })



  return Request;
};
