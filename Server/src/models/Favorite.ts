import { DataTypes, Sequelize } from "sequelize";

export const FavoriteModel = (sequelize: Sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'Unknown'),
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: true
      },
      gender: {
         type: DataTypes.ENUM('Male', 'Female', 'Unknown', 'Genderless'),
         allowNull: true
      },
      origin: {
         type: DataTypes.JSON,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
