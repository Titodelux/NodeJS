// * Aqui manejamos todas las acciones para manipular la base de datos.
// * Así como la propia base de datos (en este caso ficticia).

const database = []
let id = 1


const findAllTodos= () => {
    // ? Aquí llamaré a todos los objetos que existen en mi database.
    return database
}

const findTodoById = (id) => {
    // ? Aquí retornaré en específico un objeto de mi database.
    const todo = database.find(object => object.id == id)
    return todo
}

const createTodo = ({title, description}) => {
    // ? Aquí crearé un nuevo objeto para añadirlo a mi database.
    const newTodo = {
        id: id++,
        title,
        description,
        is_completed: false
    }
    database.push(newTodo)
    return newTodo
}

// * Con module.exports puedo exportar cualquier cosa, variables, funciones, objetos, arreglos, etc...
module.exports = { findAllTodos, findTodoById, createTodo }

// createTodo({description: "Hola", title: "Probando"})
// createTodo({description: "Adios", title: "Ya no probando"})
// : console.log(findTodoById(2));
// console.log(findAllTodos());