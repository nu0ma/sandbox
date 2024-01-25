import useSWR from 'swr';

import { getPost } from '../api/getPost';
import { Post as TPost } from '../types/post';

export const Post = () => {
  const { data } = useSWR<TPost>('/api/posts', getPost);

  console.log(data);

  if (!data) return <>Loading...</>;

  return <> Title: {data.title} </>;
};
