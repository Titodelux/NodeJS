const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Quotes = db.define('Quotes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    phrase: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    autor:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "anonymous",
    },
    date: {
        type: DataTypes.INTEGER,
        defaultValue: null
    }
},{
    timestamps: false
})

module.exports = Quotes
