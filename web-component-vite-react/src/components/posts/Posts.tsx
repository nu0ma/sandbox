import { useEffect, useState } from 'react';

import { Post } from '../../types/post';

const Post = ({ title }: { title: string }) => {
  return <div> Title:{title} </div>;
};

export const Posts = () => {
  // console.log(props.posts);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const handlePostData = (event: CustomEvent) => {
      setPosts(event.detail);
    };

    document.addEventListener('post-data', handlePostData);

    return () => {
      document.removeEventListener('post-data', handlePostData);
    };
  }, []);

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {posts.map((post) => (
        <Post key={post.id} title={post.title} />
      ))}
    </div>
  );
};
