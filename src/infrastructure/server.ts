import "dotenv/config"
import { Hono } from "hono"
import { serve } from "@hono/node-server"

const app = new Hono()


app.get("/health", (c) => c.json({ ok: true }))

serve(
  {
    fetch: app.fetch,
    port: 4000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)
