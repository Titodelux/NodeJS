const { Sequelize } = require('sequelize')
const db = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: 'admin',
    database: 'quotes-db',
    host: 'localhost',
    port: '5432'
})

module.exports = db