// build your `Resource` model here
const db = require('../../data/dbConfig')

const get = async () => {
    const data = await db('resources')

    return data
}


const create = async (resources) => {
    const [id] =  await db('resources').insert(resources)
    const newData = await db('resources').where({resource_id: id})  
    return newData[0]
}

module.exports = {
    get,
    create
}