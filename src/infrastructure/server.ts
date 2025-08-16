import "dotenv/config"
import { Hono } from "hono"
import { serve } from "@hono/node-server"

const app = new Hono()


app.get("/", (c) => c.json({ ok: true, message: "Hello, world!" }))

serve(
  {
    fetch: app.fetch,
    port: 4000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)
