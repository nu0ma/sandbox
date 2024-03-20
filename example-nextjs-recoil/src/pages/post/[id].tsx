import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { z } from 'zod';

import { Post } from '../../components/post/Post';

const paramsSchema = z.object({
  id: z.string(),
});

const PostPage = () => {
  const router = useRouter();
  const params = paramsSchema.parse(router.query);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Post postId={Number(params.id)} />
      </Suspense>
    </>
  );
};

export default PostPage;
