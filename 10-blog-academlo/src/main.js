const express = require('express')
const app = express()
const port = require('../config').api.port

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.routes')

const db  = require('./utils/database')
const { validatedPassport } = require('./middlewares/auth.middleware')
const initModels = require('./models/initModels')
const postRouter = require('./posts/posts.router')

db.authenticate()
    .then(res => console.log('Database authenticated'))
    .catch(err => console.log(err))
db.sync()
    .then(res => console.log('Database synced'))
    .catch(err => console.log(err))

initModels()

app.use(express.json())

app.get('/', validatedPassport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({message: `Connected successfully ${req.user.user_name}`, sufij: '/api/v1/'})
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/posts', postRouter)

app.listen(port, () => {
    console.log('Server initialized at port:', port)
})