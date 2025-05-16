import 'reflect-metadata';

import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const configPostgresConnection: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  entities: [__dirname + '/entities/**/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  dropSchema: false,
};

export default new DataSource(configPostgresConnection);
