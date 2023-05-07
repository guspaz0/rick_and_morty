const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         allownull: false
      },
      name: {
         type: DataTypes.STRING,
         allownull: false
      },
      status: {
         type: DataTypes.ENUM('alive', 'death', 'unknown'),
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: true
      },
      gender: {
         type: DataTypes.ENUM('male', 'female', 'unknown', 'genderless'),
         allowNull: true
      },
      origin: {
         type: DataTypes.STRING,
         allownull: false
      },
      image: {
         type: DataTypes.STRING,
         allownull: false,
      }
   }, { timestamps: false });
};
