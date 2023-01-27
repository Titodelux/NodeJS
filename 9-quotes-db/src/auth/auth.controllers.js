const { findUserByEmail } = require("../users/users.controllers")
const { comparePasswords } = require("../utils/crypto")

const checkUserCredentials = async(email, password) => {
    try {
        const user = findUserByEmail(email)
        const validatedPassword = comparePasswords(password, user.password)
        if(validatedPassword){
            return user
        } else{
            return null
        }
    } catch(err) {
        return null
    }
}

module.exports = checkUserCredentials