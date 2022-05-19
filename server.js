import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
// const express = require('express')
// const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello KuyQL'
        }
    }
}

const startServer = async () => {
    const app = express()
    const httpServer = http.createServer(app);
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

    await app.listen(4000, () => console.log('Welcome to KuyQL'))
}

startServer()