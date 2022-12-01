// * Aquí manipulamos las requests & responses, sin librerías.
// * Importamos con require los controllers, y la manera más comoda para manejarlos es con un objeto global taskControllers.

// ! const taskFindAllTodos = require("./tasks.controllers").findAllTodos
const taskControllers = require("./tasks.controllers")
// > taskControllers taskControllers.findAllTodos()


// ? Haremos las funciones callbacks que usaremos para hacer las peticiones de nuestra database
const getAllTodos = (req, res) => {
    // ? Esta función es para el callback de get('/tasks')
    const data = taskControllers.findAllTodos()
    res.status(200).json(data)
}

const getTodoById = (req, res) => {
    // ? Esta función es para el callback de get('/tasks/:id')
    const id = req.params.id
    const data = taskControllers.findTodoById(id)
    if (data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid Id: Not found'})
    }
}

const postTodo = (req, res) => {
    // ? Esta función es para el callback de post('/tasks')
    const {title, description} = req.body
    if(title && description){
        const response = taskControllers.createTodo(req.body)
        res.status(201).json(response)
    } else{
        title? message = 'Invalid description' : message = 'Invalid Title'

        res.status(400).json(message)
        }
}

// ? El module.exports puede exportar cualquier cosa, y luego lo importamos con el require(url)
module.exports = {getAllTodos, getTodoById, postTodo}