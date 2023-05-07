import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    fields: () => ({
        id: { type: GraphQLID },
        quote: { type: GraphQLString },
        author: { type: GraphQLString },
    }),
});
