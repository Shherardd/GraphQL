'use strict'

const courses = [
    {
        _id: 'anyid 1',
        title: 'My Title',
        teacher: 'My Teacher',
        description: 'A Description',
        topic: 'A interesting topic'
    },
    {
        _id: 'anyid',
        title: 'My Title 2',
        teacher: 'My Teacher',
        description: 'A Description',
        topic: 'A interesting topic'
    },
    {
        _id: 'anyid',
        title: 'My Title 3',
        teacher: 'My Teacher',
        description: 'A Description',
        topic: 'A interesting topic'
    }
]
module.exports = {
    getCourses: () => { return courses },
    saludo: () => { return 'Hola a todos' }
  }