// build your `/api/projects` router here
const express = require('express')

const router = express.Router()

const Projects = require('./model')

router.get('/', async (req, res) => {
    const data = await Projects.get()
    res.status(200).json(data)
})

router.post('/', async (req, res, next) => {
    try{
        const createProject = await Projects.create(req.body)
        res.status(201).json(createProject)

    }catch(err){
    next(err)
    }
})

module.exports = router