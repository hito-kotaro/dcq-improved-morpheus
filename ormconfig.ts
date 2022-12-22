import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const source = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['src/entity/*.entity.ts'],
  migrations: ['src/migration/**/*.ts'],
  extra: {
    ssl: process.env.POSTGRESS_SSL === 'true' ? true : false,
  },
});

export default source;
