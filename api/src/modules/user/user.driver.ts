import { pool } from '../../utils/db_pool';

export const getUser = async (id: string) => {
  const result = await pool.query('select name,age from users where id = $1', [
    id,
  ]);
  console.log('result:', result.rows);
  return result.rows;
};

export const updateUser = async (id: string, name: string) => {
  await pool.query('update users set name = $1 where id = $2', [name, id]);

  const updated = await pool.query('select name,age from users where id = $1', [
    id,
  ]);

  console.log('result:', updated.rows);
  return updated.rows[0];
};

export const createUser = async (name: string, age: number) => {
  await pool.query('insert into users (name, age) values ($1, $2)', [
    name,
    age,
  ]);
  return { status: 'ok' };
};

export const deleteUser = async (id: string) => {
  await pool.query('delete from users where id = $1', [id]);
  return { status: 'ok' };
};
