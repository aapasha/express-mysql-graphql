import { GraphQLID, GraphQLString } from "graphql";
import { QuoteType } from "../TypeDefs/Quote";
import pool from '../../database/mysql.db';


export const CREATE_QUOTE = {
    type: QuoteType,
    args: {
        id: { type: GraphQLID },
        quote: { type: GraphQLString },
        author: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { quote, author } = args;
        const sql = `INSERT INTO quotes (quote, author) VALUES ("${quote}","${author}")`;
        const result = await pool.execute(sql);
        console.log(result);
        return args;
    }
}

export const DELETE_QUOTE = {
    type: QuoteType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        const sql = `DELETE FROM quotes WHERE id = '${id}'`;
        const result = await pool.execute(sql);
        console.log(result);
        return args;
    }
}