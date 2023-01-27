const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const jwtSecret = require('../../config').api.jwtSecret
const { findOneUser } = require('../users/users.controllers')

const options = {
    jwtFromRequest: extractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}

passport.use(
    new JwtStrategy(options, async (tokenDecoded, done) => {
        try {
            const user = findOneUser(tokenDecoded.id)
            if(user){
                return done(null, tokenDecoded)
            } else{
                return done(null, false)
            }
        } catch(err) {
            return done(err, false)
        }
    })
)

module.exports = {
    validatedPassport: passport
}