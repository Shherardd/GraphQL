'use strict'
const connectDb = require('./db')

module.exports = {
    createCourse: async (root, { input }) => {
        const defaults = {
            teacher: '',
            topic: ''
        }

        const newCourse = Object.assign(defaults, input)
        let db
        let course
        try {
            db = await connectDb()
            course = await db.db('graphql').collection('courses').insertOne(newCourse)
            newCourse._id = course.insertedId
        } catch (error) {
            console.log(error)
        }
        return newCourse
    }
} 