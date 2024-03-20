import { selectorFamily, useRecoilValue } from 'recoil';

import { getPost } from '../../api/post';
import { PostSchema } from '../../types/post';

const postQuery = selectorFamily({
  key: 'PostQuery',
  get: (postId: number) => async () => {
    const response = await getPost(postId);
    const result = PostSchema.parse(response);

    return result;
  },
});

export const postSelectors = {
  useGetPost: (postId: number) => useRecoilValue(postQuery(postId)),
};
