require('dotenv').config()

module.exports = {
    api: {
        port: process.env.PORT || 9000,
        jwtSecret: process.env.JWT_SECRET,
    },
    db: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
}