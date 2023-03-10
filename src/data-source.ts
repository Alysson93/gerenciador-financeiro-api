import 'dotenv/config';
import { DataSource } from 'typeorm';

import User from './entities/User';

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    /*synchronize: true,*/
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});
