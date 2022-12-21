const { DataTypes } = require('sequelize')
const db =  require('../utils/database')
const Categories = require('./categories.model')
const Users = require('./users.model')

const Posts = db.define('Posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    },
    coverUrl: {
        type: DataTypes.STRING,
    },
    CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: Categories   
        }
    },
})

module.exports = Posts