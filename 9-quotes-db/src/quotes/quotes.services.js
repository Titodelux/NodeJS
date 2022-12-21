const { response } = require('express')
const quotesController = require('./quotes.controller')

const getAllQuotes = (req, res) => {
    quotesController.showAllQuotes()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err.message))
}

const getQuoteById = (req, res) => {
    const id = req.params.id
    quotesController.findQuoteById(id)
        .then(data => {
            if(data){res.status(200).json(data)}
            else{res.status(404).json({message: "Invalid Id: not found"})}
        })
        .catch(err => res.status(400).json(err.message))
}

const postQuote = (req, res) => {
    const {phrase, autor, date} = req.body
        quotesController.createQuote({phrase, autor, date})
            .then(data => res.status(201).json(data))
            .catch(err => res.status(400).json(err.message))
}

const getRandomQuote = (req, res) => {
    quotesController.randomQuote()
        .then(data => {
            if(data){res.status(200).json(data)}
            else{res.status(400).json({message: 'empty database'})}
        })
        .catch(err => res.status(400).json(err.message))
}

const deleteQuote = (req, res) => {
    const id = req.params.id
    quotesController.destroyQuote(id)
        .then(data => {
            if(data){res.status(200).json({message: 'delete successfully'})} 
            else{res.status(404).json({message: 'Invalid Id: not found'})}
        })
        .catch(err => res.status(400).json(err.message))
}

const putQuote = (req, res) => {
    const id = req.params.id
    const { phrase, autor, data } = req.body
    quotesController.updateQuote(id, {phrase, autor, data})
        .then(data => {
            if(data){res.status(200).json({message: "update successfully"})}
            else{res.status(404).json({message: "Invalid Id: not found"})}
        })
        .catch(err => res.status(400).json(err.message))
}

module.exports = {
    getAllQuotes,
    getQuoteById,
    postQuote,
    getRandomQuote,
    deleteQuote,
    putQuote
}
// // console.log(quotesController.postQuote({phrase: "1", autor: "2", date: 3}))s