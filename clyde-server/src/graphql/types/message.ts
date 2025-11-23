import type { Message } from "@/types"
import { builder } from "../builder"

export const MessageRef = builder.objectRef<Message>("Message")

MessageRef.implement({
    fields: t => ({
        id: t.exposeID("id"),
        guildId: t.exposeID("guildId"),
        channelId: t.exposeID("channelId"),
        userId: t.exposeID("userId"),
        content: t.exposeString("content"),
        createdAt: t.expose("createdAt", { type: "DateTime" }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" }),
        deletedAt: t.expose("deletedAt", { type: "DateTime", nullable: true }),
        discordCreatedAt: t.expose("discordCreatedAt", { type: "DateTime" }),
        discordUpdatedAt: t.expose("discordUpdatedAt", { type: "DateTime" }),
        discordDeletedAt: t.expose("discordDeletedAt", {
            type: "DateTime",
            nullable: true,
        }),
    }),
})
