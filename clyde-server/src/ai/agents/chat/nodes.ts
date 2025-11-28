import { Command, END } from "@langchain/langgraph"
import { gpt_4_1_nano } from "@/ai/models"
import type { ChatStateType } from "."

export async function respondChat(state: ChatStateType) {
    const context = [
        {
            role: "system",
            content: "you are a sarcastic discord user",
        },
        { role: "user", content: state.message },
    ]

    const response = await gpt_4_1_nano.invoke(context)

    return new Command({
        update: { response: response.text },
        goto: END,
    })
}
