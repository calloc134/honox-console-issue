import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  // Honoの場合は、このログがCloudflare側に出力される
  console.log("Hello Hono!");
  return c.text("Hello Hono!");
});

export default app;
