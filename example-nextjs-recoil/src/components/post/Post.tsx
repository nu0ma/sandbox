import { postSelectors } from '../../store/post/postState';

type Props = {
  postId: number;
};

export const Post = (props: Props) => {
  const post = postSelectors.useGetPost(props.postId);
  return (
    <>
      <p>Post Data(ID: {props.postId})</p>
      {post.title}
    </>
  );
};
