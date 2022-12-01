// * dependencies
const express = require("express")
//// const services = require('./tasks/tasks.services')

// * initial config
const taskRouter = require('./tasks/tasks.router') // ? Importamos router en nuestro archivo principal
const port = 9005
const app = express()

// * json request available
app.use(express.json()) // Esta línea nos permitirá acceder a las request en formato json, // > recuerda ejecutar
app.use('/', taskRouter) // ? Con esta vinculamos todas las rutas guardadas en tasks.router


app.get('/', (req, res)=>{
    res.json({
        message: 'Ok'
    })
})

//// app.get('/tasks', services.getAllTodos)
//// app.post('/tasks', services.postTodo)

// * start server
app.listen(port, ()=>{
    console.log("Server started in: ", port)
})