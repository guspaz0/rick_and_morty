const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      // id: {
      //    type: DataTypes.INTEGER,
      //    primaryKey: true,
      //    autoincrement: true, 1
      // },
      email: {
         type: DataTypes.STRING,
         allownull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
      
      }, { timestamps: false });
};
