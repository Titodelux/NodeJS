const Users = require('../models/users.model')
const { hashPassword } = require('../utils/crypto')
const uuid = require('uuid').v4

const findAllUsers = async () => {
    const allUsers = await Users.findAll()
    return allUsers
}

const findOneUser = async (id) => {
    const foundUser = await Users.findOne({
        where: {
            id: id
        }
    })
    return foundUser
}

const createUser = async (obj) => {
    const newUser = await Users.create({
        id: uuid(),
        first_name: obj.first_name,
        last_name: obj.last_name,
        username: obj.username,
        email: obj.email,
        password: hashPassword(obj.password),
        age: obj.age,
        country: obj.country,
    })
    return newUser
}

const updateUser = async (id, obj) => {
    const data = await Users.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const destroyUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

const findUserByEmail = async (email) => {
    const foundUser = Users.findOne({
        where: {
            email: email
        }
    })
    return foundUser
}

module.exports = {
    findAllUsers,
    findOneUser,
    createUser,
    updateUser,
    destroyUser,
    findUserByEmail
}