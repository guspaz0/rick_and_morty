const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      // id: {
      //    type: DataTypes.INTEGER,
      //    primaryKey: true,
      //    allownull: false
      // },
      email: {
         type: DataTypes.STRING,
         primaryKey: true,
         allownull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
      
      }, { timestamps: false });
};
