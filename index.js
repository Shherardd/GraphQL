'use strict'

const { graphql, buildSchema} = require ('graphql')
const express = require ('express')
const gqlMiddleware = require('express-graphql')

const app = express()
const port = process.env.PORT || 3000


// define schema
const schema = buildSchema(`
    type Query {
        hello: String,
        saludo: String
    }
`)

// Config resolvers

const resolvers = { 
    hello: () => {return 'hello world'},
    saludo: () => {return 'Hola a todos'}
}

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, function(){
    console.log(`server listening at: localhost:${port}`)
})


graphql(schema, '{ saludo hello }', resolvers).then((data) => {
    console.log(data)
})