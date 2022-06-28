import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: process.env.DBPASSWORD || '@fGch8MbuU9G',
  database: "rick_and_morty",
});
export default pool;

