import { messages } from "@/db/schema"
import { builder } from "../builder"
import { MessageRef } from "../types"

builder.mutationField("createMessage", t =>
    t.field({
        type: MessageRef,
        args: {
            id: t.arg.id({ required: true }),
            guildId: t.arg.id({ required: true }),
            channelId: t.arg.id({ required: true }),
            userId: t.arg.id({ required: true }),
            content: t.arg.string({ required: true }),
        },
        resolve: async (_parent, args, ctx) => {
            return await ctx.db
                .insert(messages)
                .values(args)
                .returning()
                .then(r => r[0])
        },
    })
)
