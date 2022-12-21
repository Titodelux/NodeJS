require('dotenv').config()

module.exports = {
    api: {
        port: process.env.PORT || 9001,
        jwtSecret: process.env.JWT_SECRET,
    },
    db: {
        // dialect: process.env.,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
}