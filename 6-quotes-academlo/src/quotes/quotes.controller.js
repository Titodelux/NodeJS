const quoteDB = []
let id = 1

const showAllQuotes = ()=>{
    return quoteDB
}

const findQuoteById = (id)=>{
    const filteredQuote = quoteDB.find((item) => item.id == id)
    return filteredQuote
}

const createQuote = ({phrase, autor, date})=>{
    const newQuote = {
        id: id++,
        phrase: `"${phrase}"`,
        autor: autor || "anonymous",
        date: date || "unknown"
    }   
    quoteDB.push(newQuote)
    return newQuote
}

const randomQuote = () => {
    const randomId = Math.ceil(Math.random() * quoteDB.length)
    const randomQuote = findQuoteById(randomId)
    return randomQuote
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