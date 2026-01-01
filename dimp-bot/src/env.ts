import { z } from "zod"

const envSchema = z.object({
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .catch("development"),

    LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).catch("info"),

    DISCORD_CLIENT_ID: z.string(),
    DISCORD_TOKEN: z.string(),
    GRAPHQL_API_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
