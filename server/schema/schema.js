const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            agrs: { id: { type: GraphQLString } },
            resolve(parent, agrs) {
                // code to get data from db/other sources
               return _.find(books, {id: agrs.id});
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});