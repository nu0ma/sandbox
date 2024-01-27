import { fetchPost } from "../../driver/getPost";

export const getPost = async (id:string) => {
  const res = await fetchPost(id);
  return res;
};
