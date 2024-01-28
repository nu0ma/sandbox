import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

import { prettyJSON } from "hono/pretty-json";
import post from "./rest/post/post";

const app = new Hono();
app.use("*", prettyJSON());
app.use("*", logger());
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

app.get("/v1/systems/ping", (c) => {
  return c.text("pong");
});

app.route("/posts", post);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
