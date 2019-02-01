'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthday: DataTypes.DATE,
    bio: DataTypes.STRING,
    image: DataTypes.BLOB,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};