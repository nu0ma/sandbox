import { Post } from "../../types/post";

export const fetchPost = async (id: string): Promise<Post> => {
  const url = new URL(`posts/${id}`, "https://jsonplaceholder.typicode.com/");
  const res = await fetch(url.toString());
  const json = await res.json();

  return json;
};
