const userServices = require('./users.services')
const router = require("express").Router()
const { validatedPassport } = require('../middlewares/auth.middleware')

router.route('/')
    .get(validatedPassport.authenticate('jwt', {session: false}),userServices.getAllUsers)
    .post(userServices.postUser)

router.route('/me')
    .get(validatedPassport.authenticate('jwt', {session: false}), userServices.getMyUser)
    .patch(validatedPassport.authenticate('jwt', {session: false}), userServices.patchMyUser)
    .delete(validatedPassport.authenticate('jwt', {session: false}), userServices.deleteMyUser)

router.route('/:id')
    .get(userServices.getOneUser)
    .patch(validatedPassport.authenticate('jwt', {session: false}),userServices.patchUser)
    .delete(userServices.deleteUser)

module.exports = router