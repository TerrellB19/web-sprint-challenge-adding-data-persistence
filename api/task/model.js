// build your `Task` model here
const db = require('../../data/dbConfig')

const get = async () => {
    const data = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'   
            )
    const updatedData = data.map(data => {
        return {
            ...data,
            task_completed: data.task_completed ? true : false
        }
    }) 
    return updatedData
}


const create = async (tasks) => {
    const [id] =  await db('tasks').insert(tasks)
    const newData = await db('tasks').where({task_id: id})  
    const verifyCompleted = newData.map(newData => {
        return {
            ...newData,
            task_completed: newData.task_completed ? true : false
        }
    })
    return verifyCompleted[0]
}

module.exports = {
    get,
    create
}