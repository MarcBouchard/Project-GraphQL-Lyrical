//--------------------------------------- Global Imports --
const webpack = require('webpack')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressGraphQL = require('express-graphql')
const webpackMiddleware = require('webpack-dev-middleware')


//------------------------------------- Relative Imports --
const models = require('./models')
const schema = require('./schema/schema')
const webpackConfig = require('../webpack.config.js')
const { MONGO_URI } = require('../config/keys')


//-------------------------------------- Mongoose Config --
mongoose.Promise = global.Promise

mongoose.connect(MONGO_URI)
mongoose.connection
  .once('open', onceOpenMongooseCB)
  .on('error', onErrorMongooseCB)


//------------------------------------------- Middleware --
const app = express()

app.use(bodyParser.json())

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}))

app.use(webpackMiddleware(webpack(webpackConfig)))


//------------------------------------------- App Export --
module.exports = app


// ********************************************************
//----------------------------------- Mongoose Callbacks --
function onceOpenMongooseCB () {
 console.log('Connected to MongoLab instance.')
}

function onErrorMongooseCB (error) {
  console.log('Error connecting to MongoLab:', error)
}
