const postControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    postControllers.findAllPosts()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({message: err.message}))
}

const getPostById = (req, res) => {
    const id = req.body
    postControllers.findPostById(id)
        .then(data => {
            if(data){res.status(200).json(data)}
            else{res.status(404).json({message: 'id not found'})}
        })
        .catch(err => res.status(400).json({message: err.message}))
}

const postNewPost = (req, res) => {
    const { title, content, coverUrl, CategoryId } = req.body
    const UserId = req.user.id
    postControllers.createPost({ title, content, coverUrl, CategoryId, UserId })
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({message: err.message, fields: {title: 'string*', content: 'string*', converUrl: 'https://imgur.com/asd.jpg', categoryId: 'integer'}}))
}

module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
}