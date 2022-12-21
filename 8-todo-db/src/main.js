// * dependencies
//// const services = require('./tasks/tasks.services')
const express = require("express")
const taskRouter = require('./tasks/tasks.router') // ? Importamos router en nuestro archivo principal
const db = require('./utils/database')

// * initial config
const port = 9009
const app = express()

// * json request available
app.use(express.json()) // Esta línea nos permitirá acceder a las request en formato json, // > recuerda ejecutar
app.use('/', taskRouter) // ? Con esta vinculamos todas las rutas guardadas en tasks.router

db.authenticate()
    .then((res) => console.log('Database authenticate'))
    .catch((err) => console.log(err))
db.sync()
    .then((res) => console.log('Database initialized'))
    .catch((err) => console.log(err))

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