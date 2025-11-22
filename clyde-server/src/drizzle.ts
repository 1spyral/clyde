import { drizzle } from "drizzle-orm/bun-sql"
import { SQL } from "bun"
import { env } from "@/env"

const client = new SQL({
    adapter: "postgres",
    url: env.DB_URL,
    max: env.DB_MAX_CONNECTIONS,
    idleTimeout: env.DB_IDLE_TIMEOUT,
    connectTimeout: env.DB_CONNECT_TIMEOUT,
})

export const db = drizzle({ client, casing: "snake_case" })
