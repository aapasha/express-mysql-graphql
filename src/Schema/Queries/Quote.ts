import { GraphQLList } from 'graphql';
import { QuoteType } from '../TypeDefs/Quote';
import pool from '../../database/mysql.db';

export const GET_ALL_QUOTES = {
    type: new GraphQLList(QuoteType),
    async resolve() {
        const sql = 'SELECT * FROM dailyquote.quotes;';
        const result = await pool.query(sql);
        return result[0];
    },
};

export const GET_RANDOM_QUOTE = {
    type: new GraphQLList(QuoteType),
    async resolve() {
        const sql = 'SELECT * FROM quotes ORDER BY RAND() LIMIT 1';
        const result = await pool.query(sql);
        console.log(result[0]);
        return result[0];
    },
};
