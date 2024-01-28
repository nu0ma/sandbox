import { Post } from "../../types/post";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchPost = async (id: string): Promise<Post> => {
  const url = new URL(`/posts/${id}`, baseUrl);
  const res = await fetch(url.toString());
  const json = await res.json();

  return json;
};
