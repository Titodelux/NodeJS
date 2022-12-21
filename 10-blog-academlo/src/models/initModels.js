const Categories = require("./categories.model")
const Posts = require("./posts.model")
const Users = require("./users.model")


const initModels = () => {
    Posts.belongsTo(Categories)
    Categories.hasMany(Posts)

    Posts.belongsTo(Users)
    Users.hasMany(Posts)
}

module.exports = initModels 