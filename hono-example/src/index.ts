import { serve } from "@hono/node-server";
import { Hono } from "hono";

import { prettyJSON } from "hono/pretty-json";
import { getPost } from "./usecase/post/getPost";

const app = new Hono();
app.use("*", prettyJSON());
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/json", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.get("/posts/:id", async (c) => {
  const id = c.req.param("id");
  const post = await getPost(id);
  console.log(post);
  return c.json({ title: post.title });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
