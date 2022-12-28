import { pool } from '../../utils/db_pool';

export const getUser = async (id: string) => {
  const result = await pool.query(
    'select name,age from users where id = $1',
    [id]
  );
  return result.rows[0];
};
