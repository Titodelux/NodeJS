const userServices = require('./users.services')
const router = require("express").Router()
const { validatedPassport } = require('../middlewares/auth.middleware')

router.get('/', validatedPassport.authenticate('jwt', {session: false}),userServices.getAllUsers)
router.post('/', userServices.postUser)
router.get('/:id', userServices.getOneUser)

module.exports = router