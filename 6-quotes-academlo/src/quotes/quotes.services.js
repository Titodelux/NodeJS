const { response } = require('express')
const quotesController = require('./quotes.controller')

const getAllQuotes = (req, res) => {
    const quotes = quotesController.showAllQuotes()
    res.status(200).json(quotes)
}

const getQuoteById = (req, res) => {
    const id = req.params.id
    const quote = quotesController.findQuoteById(id)
    if(quote){
        res.status(200).json(quote)
    } else{
        res.status(404).json({
            message: "Invalid Id: not found",
        })
    }
}

const postQuote = (req, res) => {
    const {phrase, autor, date} = req.body
    if(phrase){
        const newQuote = quotesController.createQuote({phrase, autor, date})
        res.status(201).json(newQuote)
    } else {
        res.status(400).json({
            message: "Invalid data",
            fields: {phrase: "string*", autor: "string", year: "number year"}
        })
    }
}

const getRandomQuote = (req, res) => {
    const randomQuote = quotesController.randomQuote()
    if(randomQuote){
        res.status(200).json(randomQuote)
    } else{
        res.status(400).json({
            message: "No phrases: empty database"
        })
    }
}

module.exports = {
    getAllQuotes,
    getQuoteById,
    postQuote,
    getRandomQuote,
}
// // console.log(quotesController.postQuote({phrase: "1", autor: "2", date: 3}))s