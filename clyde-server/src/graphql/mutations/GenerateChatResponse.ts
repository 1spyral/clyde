import { messages } from "@/db/schema"
import { builder, MessageRef } from "@graphql"
import { type ChatStateType } from "@/ai/agents/chat"

const GenerateChatResponseInput = builder.inputType(
    "GenerateChatResponseInput",
    {
        fields: t => ({
            guildId: t.id({ required: true }),
            channelId: t.id({ required: true }),
            userId: t.id({ required: true }),
            content: t.string({ required: true }),
        }),
    }
)

builder.mutationField("generateChatResponse", t =>
    t.field({
        type: "String",
        nullable: false,
        args: {
            input: t.arg({ type: GenerateChatResponseInput, required: true }),
        },
        resolve: async (_parent, args, _ctx) => {
            const initialState: ChatStateType = {
                history: [],
                message: args.input.content,
            }

            const result = await _ctx.agents.chatAgent.invoke(initialState)

            return result.response || "No response generated."
        },
    })
)
