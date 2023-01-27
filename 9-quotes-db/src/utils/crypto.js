const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    const hashedPassword = bcrypt.hashSync(plainPassword, 10)
    return hashedPassword
}

const comparePasswords = (plainPassword, hashedPassword) => {
    const validated = bcrypt.compareSync(plainPassword, hashPassword)
    return validated
}

module.exports = {
    hashPassword,
    comparePasswords,
}