import { DataTypes, Sequelize } from "sequelize";

export const UserModel = (sequelize: Sequelize) => {
   sequelize.define('User', {
      // id: {
      //    type: DataTypes.INTEGER,
      //    primaryKey: true,
      //    allownull: false
      // },
      email: {
         type: DataTypes.STRING,
         primaryKey: true,
         allowNull: false,
         validate: {
            isEmail: true
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
      
      }, { timestamps: false });
};
