const express = require("express")
const port = 9001
const app = express()

app.get("/profile", (peticion,respuesta)=>{
    respuesta.json({
        name: "Ángel",
        surname: "Pérez",
        age: 18,
        country: "VEN"
    })
})
app.post("/profile", (peticion,respuesta)=>{
    respuesta.json([
        "TiMining",
        "Floid",
        "Heinsohn",
    ])
})
app.patch("/profile", (peticion,respuesta)=>{
    respuesta.json([
        "Minecraft",
        "Natación",
        "Jugar con mis gatos",
    ])
})

app.listen(port,()=>{
    console.log("Se ha inicializado la API, puerto: ", port);
})