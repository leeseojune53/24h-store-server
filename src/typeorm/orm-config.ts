import 'dotenv/config';
import { ConnectionOptions } from 'typeorm';

interface DBConnectionOptions {
  [env: string]: ConnectionOptions;
}

export const connectionOptions: DBConnectionOptions = {
  development: {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: '24hstore',
    synchronize: true,
    logging: true,
    entities: ['./dist/**/*.entity.js'],
  },
  production: {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: '24hstore',
    synchronize: true,
    logging: true,
    entities: ['./dist/**/*.entity.js'],
  },
};
