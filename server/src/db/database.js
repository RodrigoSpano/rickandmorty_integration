const { Sequelize } = require("sequelize");
const UserModel = require('../models/userModel')
const FavoriteModel = require('../models/favModel')

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/rickandmorty`,
  { logging: false, native: false }
)

UserModel(sequelize)
FavoriteModel(sequelize)

const { User, Favorite } = sequelize.models
User.belongsToMany(Favorite, { through: 'user_favorite' })
Favorite.belongsToMany(User, { through: 'user_favorite' })

module.exports = {
  User,
  Favorite,
  sequelize
}