'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate({User}) {
      this.belongsTo(User, {foreignKey: 'userId'})
    }
  }
  Movie.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    info: DataTypes.TEXT,
    img: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};