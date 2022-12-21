const uuid = require('uuid').v4

const Posts = require('../models/posts.model')
const Categories = require('../models/categories.model')
const Users = require('../models/users.model')

const findAllPosts = async () => {
    const posts = await Posts.findAll({
        include: [
            {model: Categories, attributes: {
                exclude: ['id']
            }}, 
            {model: Users, attributes: {
                exclude: ['email', 'password', 'role', 'createdAt', 'updatedAt']
            }}
        ],
        attributes: {
            exclude: ['CategoryId', "UserId"]
        }
    })
    return posts
}

const findPostById = async (id) => {
    const foundPost = await Posts.findOne({
        where: {
            id: id
        }
    })
    return foundPost
}

const createPost = async (obj) => {
    const newPost = await Posts.create({
        id: uuid(),
        title: obj.title,
        content: obj.content,
        UserId: obj.UserId,
        coverUrl: obj.coverUrl,
        CategoryId: obj.CategoryId
    })
    return newPost
}

const destroyPost = async (id) => {
    const data = await Posts.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    destroyPost,
}