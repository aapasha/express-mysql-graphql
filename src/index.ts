// import { DataSource } from 'typeorm';
import dotenv = require('dotenv');
import config from 'config';

import app from './app';

const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') dotenv.config();

const PORT = config.get('PORT');

app.listen(PORT, () => console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`));
