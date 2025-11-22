import { pgTable } from "drizzle-orm/pg-core"
import * as t from "drizzle-orm/pg-core"
import { timestamps } from "@/db/columns.helpers"

export const messages = pgTable("messages", {
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    messageId: t.text().notNull(),
    guildId: t.text().notNull(),
    channelId: t.text().notNull(),
    userId: t.text().notNull(),
    content: t.text().notNull(),
    ...timestamps,
})
