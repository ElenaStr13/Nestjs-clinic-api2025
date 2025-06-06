import * as process from 'node:process';
import { Config } from './config.type';

export default (): Config => ({
  app: {
    port: parseInt(process.env.APP_PORT || '3000', 10),
    host: process.env.APP_HOST || 'localhost',
  },
  database: {
    type: process.env.DB_TYPE as 'mysql', // якщо хочеш — можеш прибрати
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || 'user',
    name: process.env.DB_NAME || 'my-nestjs-test',
  },
});
