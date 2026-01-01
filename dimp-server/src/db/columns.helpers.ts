import * as t from "drizzle-orm/pg-core"

export const timestamps = {
    createdAt: t.timestamp().defaultNow().notNull(),
    updatedAt: t.timestamp().defaultNow().notNull(),
    deletedAt: t.timestamp(),
}

export const discordTimestamps = {
    discordCreatedAt: t.timestamp().notNull(),
    discordUpdatedAt: t.timestamp().notNull(),
    discordDeletedAt: t.timestamp(),
}
