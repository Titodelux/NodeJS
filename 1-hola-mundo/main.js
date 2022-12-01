const express = require("express")
const port = 9000
const app = express()

app.get('/hola', (peticion, respuesta)=>{
    respuesta.json({
        message: "Hola mundo :D"
    })
})
app.delete('/hola', (peticion, respuesta)=>{
    respuesta.json({
        message: "Adios mundo D:"
    })
})

app.listen(port, () => {
    console.log("Inicializando server en: ", port )
})