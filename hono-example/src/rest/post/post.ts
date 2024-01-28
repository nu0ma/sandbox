import { Hono } from "hono";
import { getPost } from "../../usecase/post/getPost";

const app = new Hono();

app.get("/:id", async (c) => {
  const id = c.req.param("id");
  const post = await getPost(id);
  console.log(post);
  return c.json({ title: post.title });
});

export default app;