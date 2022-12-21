// * Aquí manipulamos las requests & responses, sin librerías.
// * Importamos con require los controllers, y la manera más comoda para manejarlos es con un objeto global taskControllers.

// ! const taskFindAllTodos = require("./tasks.controllers").findAllTodos
const taskControllers = require("./tasks.controllers")
// > taskControllers taskControllers.findAllTodos()


// ? Haremos las funciones callbacks que usaremos para hacer las peticiones de nuestra database
const getAllTodos = (req, res) => {
    // ? Esta función es para el callback de get('/tasks')
    taskControllers.findAllTodos()
        .then(data => {res.status(200).json(data)})
        .catch(err => {res.status(400).json({message: err.message})})
}

const getTodoById = (req, res) => {
    // ? Esta función es para el callback de get('/tasks/:id')
    const id = req.params.id
    taskControllers.findTodoById(id)
        .then(data => {
            if (data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid Id: Not found'})
            }
        })
        .catch(err => console.log(err))
}

const postTodo = (req, res) => {
    // ? Esta función es para el callback de post('/tasks')
    const {title, description} = req.body
    taskControllers.createTodo({title, description})
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({message: err.message}))
}

const deleteTodo = (req, res) => {
    // ? Esta funcion es para el callback de delete('/tasks/:id')
    const id = req.params.id
    taskControllers.destroyTodo(id)
        .then(data => {
            if(data){res.status(200).json({message: 'Delete successfully'})}
            else{res.status(404).json({message: 'Invalid Id: Not found'})}
        })
        .catch(err => console.log(err.message))
}

const updateTodo = (req, res) => {
    const id = req.params.id
    const {title, description, is_completed} = req.body
    taskControllers.updateTodo(id, {title, description, is_completed})
        .then(data => {
            if(data){res.status(200).json({message: 'Update successfully'})}
            else{res.status(404).json({message: 'Invalid Id: Not found'})}
        })
        .catch(err => console.log(err.message))
}

// ? El module.exports puede exportar cualquier cosa, y luego lo importamos con el require(url)
module.exports = {getAllTodos, getTodoById, postTodo, deleteTodo, updateTodo}