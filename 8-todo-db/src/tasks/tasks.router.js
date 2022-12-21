// * Aquí tendremos las rutas y "verbos", usamos el express.router()

// ! express = require("express")... router = express.router
const router = require("express").Router() // > Recuerda .Router con R mayúscula y ejecutarla

const taskServices = require("./tasks.services")


// ? Aquí podremos controlar todas las rutas que manejará nuestra API
// ? Y también sus respectivos verbos (peticiones)
router.get('/tasks', taskServices.getAllTodos)
router.post('/tasks', taskServices.postTodo)
router.get('/tasks/:id', taskServices.getTodoById)
router.delete('/tasks/:id', taskServices.deleteTodo)
router.put('/tasks/:id', taskServices.updateTodo)


// ? Dentro del router se guardaran los metodos que usemos y sus rutas (.get y .post)
module.exports = router