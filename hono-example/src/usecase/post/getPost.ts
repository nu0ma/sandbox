import { fetchPost } from "../../driver/post/getPost";

export const getPost = async (id: string) => {
  const res = await fetchPost(id);
  return res;
};
