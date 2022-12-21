const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

// console.log(hashPasswordSync('holis'))

const comparePasswords = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

// console.log(comparePasswords('holi', '$2b$10$ZWLYuIFgkQkLS/yP50ZDcuBYSum3bK0qpd7JeVmPv3y80CJioP3JS'))

module.exports = {
    hashPassword,
    comparePasswords,
}