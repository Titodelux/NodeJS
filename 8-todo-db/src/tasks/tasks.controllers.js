// * Aqui manejamos todas las acciones para manipular la base de datos.
// * Así como la propia base de datos (en este caso ficticia).

const Tasks = require('../models/tasks.model')

const database = []
let id = 1


const findAllTodos = async() => {
    // ? Aquí llamaré a todos los objetos que existen en mi database.
    const database = await Tasks.findAll()
    return database
}

const findTodoById = async(id) => {
    // ? Aquí retornaré en específico un objeto de mi database.
    const todo = await Tasks.findOne({
        where: {
            id: id
        }
    })
    return todo
}

const createTodo = async({title, description}) => {
    // ? Aquí crearé un nuevo objeto para añadirlo a mi database.
    const newTodo = await Tasks.create({
        title,
        description,
    })
    return newTodo
}

const destroyTodo = async(id) => {
    const data = await Tasks.destroy({
        where: {
            id: id
        }
    })
    return data
}

const updateTodo = async(id, obj) => {
    const data = await Tasks.update(obj, {
        where:{
            id: id
        }
    })
    return data[0]
}

// * Con module.exports puedo exportar cualquier cosa, variables, funciones, objetos, arreglos, etc...
module.exports = { findAllTodos, findTodoById, createTodo, destroyTodo, updateTodo }

// createTodo({description: "Hola", title: "Probando"})
// createTodo({description: "Adios", title: "Ya no probando"})
// : console.log(findTodoById(2));
// console.log(findAllTodos());