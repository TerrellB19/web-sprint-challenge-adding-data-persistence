// build your `Project` model here
const db = require('../../data/dbConfig')

const get = async () => {
    const data = await db('projects')
    const verifyCompleted = data.map(data => {
        return {
            ...data,
            project_completed: data.project_completed ? true : false
        }
    })

    return verifyCompleted
}

const create = async (project) => {
    const [id] =  await db('projects').insert(project)
    const newData = await db('projects').where({project_id: id})
    const updatedNewData = newData.map(newData => {
        return {
            ...newData,
            project_completed: newData.project_completed ? true : false
        }
    }) 
    return updatedNewData[0]
}

module.exports = {
    get,
    create
}