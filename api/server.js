// build your server here and require it from index.js
const express = require('express')

const server = express()

server.use(express.json())

const ProjectRouter = require('./project/router')
const ResourceRouter = require('./resource/router')
const TaskRouter = require('./task/router')

server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)



server.use((err, req, res, next) => {    
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server