import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_ALL_QUOTES, GET_RANDOM_QUOTE } from './Queries/Quote';
import { CREATE_QUOTE, DELETE_QUOTE } from './Mutations/Quote';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllQuotes: GET_ALL_QUOTES,
        getRandomQuote: GET_RANDOM_QUOTE,
    },
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createQuote: CREATE_QUOTE,
        deleteQuote: DELETE_QUOTE,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
