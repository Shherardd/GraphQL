'use strict'

const courses = [
    {
        _id: 'anyid1',
        title: 'My Title',
        teacher: 'My Teacher',
        description: 'A Description',
        topic: 'A interesting topic'
    },
    {
        _id: 'anyid2',
        title: 'My Title 2',
        teacher: 'My Teacher',
        description: 'A Description',
        topic: 'A interesting topic'
    },
    {
        _id: 'anyid3',
        title: 'My Title 3',
        teacher: 'My Teacher',
        description: 'A Description',
        topic: 'A interesting topic'
    }
]
module.exports = {
    Query: {
    getCourses: () => {
        return courses 
        },
    getCourse: (root, args) => {
        const course = courses.filter(course => course.id === args.id)
        return course.pop()
    }

    }
    
  }