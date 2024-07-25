const { gql } = require('apollo-server');
const typeDefs=gql`
type ToDo{
id: ID!
title: String!
description: String!
completed: Boolean!
}
type Query{
getToDos:[ToDo],
getToDo(id:ID!):ToDo,
}
type Mutation{
addToDo(title: String,description: String): ToDo
deleteToDo(id: ID!): ToDo
updateToDo(id: ID!,completed: Boolean): ToDo
}
`
module.exports=typeDefs