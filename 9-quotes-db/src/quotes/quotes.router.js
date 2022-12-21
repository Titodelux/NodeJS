const router = require('express').Router()
const quotesServices = require('./quotes.services')

router.get('/quotes/', quotesServices.getAllQuotes)
router.post('/quotes/', quotesServices.postQuote)
router.get('/quotes/random', quotesServices.getRandomQuote)
router.get('/quotes/:id', quotesServices.getQuoteById)
router.delete('/quotes/:id', quotesServices.deleteQuote)
router.put('/quotes/:id', quotesServices.putQuote)

module.exports = router