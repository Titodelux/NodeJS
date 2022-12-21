const { Sequelize } = require('sequelize')

const config = require('../../config').db

const db = new Sequelize({
    dialect: 'postgres',
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
})

module.exports = db