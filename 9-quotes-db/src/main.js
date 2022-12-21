// * dependencies:
const express = require("express")
const app = express()
const quotesRouter = require('./quotes/quotes.router')

const db = require('./utils/database')

// * initial config
const port = 9006

db.authenticate()
    .then((res) => console.log('Database authenticate'))
    .catch((err) => console.log(err))
db.sync()
    .then((res) => console.log('Database initialized'))
    .catch((err) => console.log(err))
    
app.use(express.json()) // * json request available
app.use('/api/v2', quotesRouter) // > Es importante versionar nuestra api en los prefijos

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Connected Successful"
    })
})


// * start server
app.listen(port, ()=>{
    console.log("Server started in: ", port)
})