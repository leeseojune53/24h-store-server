import 'dotenv/config';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

interface DBConnectionOptions {
  [env: string]: ConnectionOptions;
}

export const connectionOptions: DBConnectionOptions = {
  development: {
    type: 'mysql',
    host: process.env.DEVELOPMENT_DATABASE_HOST,
    port: +process.env.DEVELOPMENT_DATABASE_PORT,
    username: process.env.DEVELOPMENT_DATABASE_USER,
    password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
    database: process.env.DEVELOPMENT_DATABASE_NAME,
    synchronize: false,
    logging: true,
    entities: ['./dist/**/*.entity.js'],
    namingStrategy: new SnakeNamingStrategy()
  },
  production: {
    type: 'mysql',
    host: process.env.PRODUCTION_DATABASE_HOST,
    port: +process.env.PRODUCTION_DATABASE_PORT,
    username: process.env.PRODUCTION_DATABASE_USER,
    password: process.env.PRODUCTION_DATABASE_PASSWORD,
    database: process.env.PRODUCTION_DATABASE_NAME,
    synchronize: false,
    logging: true,
    entities: ['./dist/**/*.entity.js'],
  },
};
