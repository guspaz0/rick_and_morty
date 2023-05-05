const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         autoinfrement: true,
         allownull: false,
      },
      name: {
         type: DataTypes.STRING(30),
         allownull: false,
      },
      status: {
         type: DataTypes.ENUM({
            values: ['alive', 'death', 'unknown'],
            defaults: 'unknown'})
      },
      species: {
         type: DataTypes.ENUM({
            values: ['alien', 'human', 'unknown'],
            defaults: 'unknown'})
      },
      gender: {
         type: DataTypes.ENUM({
            values: ['male', 'female', 'unknown', 'genderless'],
            default: 'unknown'})
      },
      origin: {
         type: DataTypes.STRING(30),
         allownull: false,
      },
      image: {
         type: DataTypes.STRING(),
         allownull: false,
      }
   }, { timestamps: false });
};
