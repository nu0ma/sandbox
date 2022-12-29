import { pool } from '../../utils/db_pool';
import { User } from './user.schema';

export const getUserDriver = async (id: string) => {
  const result = await pool.query<User>(
    'select name,age from users where id = $1',
    [id]
  );
  console.log('result:', result.rows);
  return result.rows;
};

export const updateUserDriver = async (id: string, name: string) => {
  await pool.query('update users set name = $1 where id = $2', [name, id]);

  const updated = await pool.query<User>(
    'select name,age from users where id = $1',
    [id]
  );

  console.log('result:', updated.rows);
  return updated.rows[0];
};

export const createUserDriver = async (name: string, age: number) => {
  await pool.query('insert into users (name, age) values ($1, $2)', [
    name,
    age,
  ]);
  return { status: 'ok' };
};

export const deleteUserDriver = async (id: string) => {
  await pool.query('delete from users where id = $1', [id]);
  return { status: 'ok' };
};
