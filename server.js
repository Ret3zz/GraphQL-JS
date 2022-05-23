import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers.js';
import typeDefs from './typeDefs.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// const typeDefs = require('./typeDefs')
// const resolvers = require('./resolvers')
// const express = require('express')
// const { ApolloServer, gql } = require('apollo-server-express')

const startServer = async () => {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    app.use(bodyParser.json({
        limit: '100mb',
        parameterLimit: 200000
    }));
    app.use(bodyParser.urlencoded({
        limit: '100mb',
        extended: true,
        parameterLimit: 200000
    }));
    
    app.use(function (req, res, next) {
    
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

    await mongoose.connect('mongodb://localhost:27017/BookOfGOD')
    console.log('mongo connected....')

    await app.listen(4000, () => console.log('Welcome to KuyQL'))
}

startServer()