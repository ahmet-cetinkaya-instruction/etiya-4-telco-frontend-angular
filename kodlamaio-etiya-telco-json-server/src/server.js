const jsonServer = require('json-server');
const dotenv = require('dotenv');
const express = require('express');
const customErrorHandler = require('./core/middlewares/errors/customErrorHandler');

// Enviroment Variables
dotenv.config({ path: '.env' });

// Express
const server = jsonServer.create();

// Routers Middleware
const jsonServerMiddlewares = jsonServer.defaults();

server.use(jsonServerMiddlewares);
server.use(express.json());

// Routers Middleware
const jsonServerRouters = jsonServer.router(process.env.DB_PATH);
const routers = require('./routes');

server.use(routers);
server.use(jsonServerRouters);

/// Error Handler
server.use(customErrorHandler);

server.listen(process.env.PORT, () =>
  console.log(`JSON Server is running. 🚀 http://${process.env.HOST}:${process.env.PORT}`)
);
