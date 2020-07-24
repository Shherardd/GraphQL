'use strict'


const connectDB = require('./db')
const { ObjectID } = require('mongodb')
const mutations = require('./mutations')

module.exports = {
    Query: {
    getCourses: async () => {
        let db
        let courses = []
        try {
            db = await connectDB()
            courses = await db.db('graphql').collection('courses').find().toArray()
        } catch (error) {
            console.error(error)
        }

        return courses
        },
    getCourse: async (root, { id }) => {
        let db
        let course
        try {
            db = await connectDB()
            course = await db.db('graphql').collection('courses').findOne({_id: ObjectID(id)})
        } catch (error) {
            console.error(error)
        }

        return course
    }

    },
    Mutation: mutations
    
  }