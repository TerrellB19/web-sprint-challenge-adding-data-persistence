// build your `/api/tasks` router here
const db = require('../../data/dbConfig')
const express = require('express')

const router = express.Router()
const Tasks = require('./model')


router.get('/', async (req, res, next) => {
    try{  
        const data = await Tasks.get()
        res.status(200).json(data)  
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const newData = await Tasks.create(req.body)
        res.status(201).json(newData)
    }catch(err){
        next(err)
    }
})

module.exports = router