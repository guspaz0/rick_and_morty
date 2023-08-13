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
         type: DataTypes.ENUM('Alive', 'Death', 'Unknown'),
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: true
      },
      gender: {
         type: DataTypes.ENUM('Male', 'Demale', 'Unknown', 'Genderless'),
         allowNull: true
      },
      origin: {
         type: DataTypes.JSON,
         allownull: false
      },
      image: {
         type: DataTypes.STRING,
         allownull: false,
      }
   }, { timestamps: false });
};
