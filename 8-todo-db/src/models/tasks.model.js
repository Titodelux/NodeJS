const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Tasks = db.define('Tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    timestamps: false,
})

module.exports = Tasks