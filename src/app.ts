import express = require('express');
import cors = require('cors');
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';

require('./database/mysql.db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
        '/graphql',
        graphqlHTTP({
            schema,
            graphiql: true,
        })
    );

export default app;
