const Quotes = require('../models/quotes.model')

const showAllQuotes = async()=>{
    const quotes = await Quotes.findAll()
    return quotes
}

const findQuoteById = async(id)=>{
    const foundQuote = await Quotes.findOne({
        where: {
            id: id
        }
    })
    return foundQuote
}

const createQuote = async({phrase, autor, date})=>{
    const newQuote = await Quotes.create({
        phrase: phrase,
        autor: autor || "anonymous",
        date: date || null,
    })
    return newQuote
}

const randomQuote = async() => {
    const quotes = await showAllQuotes()
    const arrId = []

    for (const quote of quotes) {
        arrId.push(quote.id)
    }

    const randomId = arrId[Math.ceil(Math.random() * arrId.length-1)]
    const randomQuote = await findQuoteById(randomId)

    return randomQuote
}

const destroyQuote = async(id) => {
    const data = await Quotes.destroy({
        where: {
            id: id
        }
    })
    return data
}

const updateQuote = async(id, obj) => {
    const data = await Quotes.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

// | const randomQuoteT = () => {
// |   const randomIndex = Math.floor(Math.random() * quoteDB.length)
// |    return quoteDB[randomIndex]
// | }

module.exports = {
    showAllQuotes,
    findQuoteById,
    createQuote,
    randomQuote,
    destroyQuote,
    updateQuote
}


/* 
// createQuote({
//     "phrase": "La mejor venganza es ser diferente de quien te causó el daño",
//     "autor": "Marco Aurelio",
// })
// createQuote({
//     "phrase": "Cuando el sol se eclipsa para desaparecer, se ve mejor su grandeza",
//     "autor": "Séneca",
// })
// createQuote({
//     "phrase": "El secreto del cambio es centraar toda tu energía, no en luchar contra lo viejo, sino en construir lo nuevo",
//     "autor": "Sócrates",
// })
// createQuote({
//     "phrase": "El hombre no está preocupado atanto por problemas reales como por sus ansiedades imaginadas sobre los problemas reales",
//     autor: "Epicteto"
// }) 
*/


// // console.log(showAllQuotes())
// // console.log(randomQuote());