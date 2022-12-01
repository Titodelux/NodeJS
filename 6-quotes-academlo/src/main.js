// * dependencies:
const express = require("express")
const app = express()
const quotesRouter = require('./quotes/quotes.router')

// * initial config
const port = 9006

app.use(express.json()) // * json request available
app.use('/api/v1', quotesRouter) // > Es importante versionar nuestra api en los prefijos

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Connected Successful"
    })
})


// * start server
app.listen(port, ()=>{
    console.log("Server started in: ", port)
})