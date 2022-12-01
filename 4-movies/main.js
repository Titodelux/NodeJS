const express = require("express")
const app = express()
const port=9002

app.use(express.json())
let id = 1
const moviesBD = []
// title
// year
// director
// genre [arr]

app.get('/', (req,res)=>{
    res.json({
        message: "ok"
    })
})

app.get('/movies', (req,res)=>{
    res.status(200).json(moviesBD)
})

app.get('/movies/:id', (req, res)=>{
    const id = req.params.id
    const movie = moviesBD.find(i => i.id == id)
    if(movie){
        res.status(200).json(movie)
    } else{
        res.status(404).json({message: "Not found the movie"})
    }
})

app.post('/movies', (req,res)=>{
    const {title, year, director, genre} = req.body
    if(title&&year&&director&&genre){
        const newMovie = {
            id: id++,
            title,
            year,
            director,
            genre,
        }
        moviesBD.push(newMovie)
        res.status(200).json(newMovie)
    } else{
        res.status(400).json({message: "invalid data"})
    }
})



app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})