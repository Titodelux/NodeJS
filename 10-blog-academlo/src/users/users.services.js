const userControllers = require('../users/users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json({message: err.message}))
}

const getOneUser = (req, res) => {
    const id = req.params.id
    userControllers.findOneUser(id)
        .then((data) => {
            if(data){res.status(200).json(data)}
            else{res.status(401).json({message: 'id not found'})}
        })
        .catch((err) => res.status(400).json({message: err.message}))
}

const getMyUser = (req, res) => {
    const id = req.user.id
    userControllers.findOneUser(id)
        .then(data => res.status(200).json(data))    
        .catch(err => res.status(400).json({message: err.message}))    
}

const postUser = (req, res) => {
    const obj = { first_name, last_name, username, email, password, age, country} = req.body
    userControllers.createUser(obj)
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(400).json({message: err.message, fields: {
            first_name: 'string*',
            last_name: 'string*',
            username: 'string*',
            email: 'string*',
            password: 'string*',
            age: 'integer',
            country: 'VNZ',
        }}))
}

const patchMyUser = (req, res) => {
    const id = req.user.id
    const obj = { first_name, last_name, username, country, age } = req.body
    userControllers.updateUser(id, obj)
        .then(data => {
            res.status(200).json({message: 'updated successfully'})
        })
        .catch(err => res.status(400).json({message: err.message}))
}

const patchUser = (req, res) => {
    const id = req.params.id
    const obj = { first_name, last_name, username, country, age } = req.body
    userControllers.updateUser(id, obj)
        .then(data => {
            if(data){res.status(200).json({message: 'updated successfully'})}
            else{res.status(404).json({message: 'id not found'})}
        })
        .catch(err => res.status(400).json({message: err.message}))
}

const deleteUser = (req, res) => {
    const id = req.params.id
    userControllers.destroyUser(id)
        .then(data => {
            if(data){res.status(200).json({message: 'deleted successfully'})}
            else{res.status(404).json({message: 'id not found'})}
        })
        .catch(err => res.status(400).json({message: err.message}))
}

const deleteMyUser = (req, res) => {
    const id = req.user.id
    userControllers.destroyUser(id)
        .then(data => {
            res.status(200).json({message: 'deleted successfully'})
        })
        .catch(err => res.status(400).json({message: err.message}))
}

module.exports = {
    getAllUsers,
    getOneUser,
    postUser,
    patchUser,
    deleteUser,
    getMyUser,
    patchMyUser,
    deleteMyUser
}