import axios from 'axios';

// NEXT_PUBLIC_API=https://jsonplaceholder.typicode.com/
export const url = process.env.NEXT_PUBLIC_API + 'users/';

export const getUser = async (id: number) => {
  const result = await axios.get(url + String(id));
  return result.data;
};
