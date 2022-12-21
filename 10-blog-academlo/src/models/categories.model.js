const { DataTypes } = require('sequelize')
const db =  require('../utils/database')

const Categories = db.define('Categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    timestamps: false
})

module.exports = Categories