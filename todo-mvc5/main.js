const express = require("express")
// const services = require('./tasks/tasks.services')
// ? Importamos router en nuestro archivo principal
const taskRouter = require('./tasks/tasks.router')
const port = 9005
const app = express()


app.use(express.json()) // ? Esta línea nos permitirá acceder a las request en formato json
app.use('/', taskRouter) // ? Con esta vinculamos todas las rutas guardadas en tasks.router


app.get('/', (req, res)=>{
    res.json({
        message: 'Ok'
    })
})

// app.get('/tasks', services.getAllTodos)
// app.post('/tasks', services.postTodo)

app.listen(port, ()=>{
    console.log("Server started in: ", port)
})