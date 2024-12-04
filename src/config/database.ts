import { Pool } from 'pg';

const pool = new Pool({
  host: 'aws-0-sa-east-1.pooler.supabase.com',
  user: 'postgres.ajswaqqimxoedabykmwi',
  password: 'w9MGNmKWvVqLXGPA',
  database: 'postgres',
  port: 6543, });

export default pool;