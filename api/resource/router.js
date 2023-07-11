// build your `/api/resources` router here
const express = require('express')

const router = express.Router()

const Resource = require('./model')

router.get('/', async (req, res) => {
    const data = await Resource.get()
    res.status(200).json(data)
})

router.post('/', async(req, res, next) => {
    try{
        const createResource = await Resource.create(req.body)
        res.status(201).json(createResource)
    }catch(err){
        next()
    }
})

module.exports = router