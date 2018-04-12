const _ = require('lodash')
const graphql = require('graphql')

const mutations = require('./mutations')
const RootQueryType = require('./root_query_type')

const { GraphQLSchema } = graphql

module.exports = new GraphQLSchema({
	query: RootQueryType,
	mutation: mutations
})
