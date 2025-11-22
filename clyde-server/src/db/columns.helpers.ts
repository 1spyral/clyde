import * as t from "drizzle-orm/pg-core"

export const timestamps = {
    createdAt: t.timestamp().defaultNow().notNull(),
    updatedAt: t.timestamp(),
    deletedAt: t.timestamp(),
}
