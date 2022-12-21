const router = require('express').Router()
const { validatedPassport } = require('../middlewares/auth.middleware')
const postServices = require('./posts.services')

router.route('/')
    .get(postServices.getAllPosts)
    .post(validatedPassport.authenticate('jwt', {session: false}), postServices.postNewPost)

module.exports = router