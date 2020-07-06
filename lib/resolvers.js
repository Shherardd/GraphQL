'use strict'


module.exports = {
    Query: {
    getCourses: () => {
        return courses 
        },
    getCourse: (root, args) => {
        const course = courses.filter(course => course._id === args.id)
        return course.pop()
    }

    }
    
  }