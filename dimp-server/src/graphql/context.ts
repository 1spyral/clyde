import type { BunSQLDatabase } from "drizzle-orm/bun-sql"
import type { FastifyBaseLogger, FastifyReply, FastifyRequest } from "fastify"
import * as schema from "@schema"

export interface Context {
    request: FastifyRequest
    reply: FastifyReply
    db: BunSQLDatabase<typeof schema>
    agents: typeof import("@/ai/agents")
    logger: FastifyBaseLogger
}
