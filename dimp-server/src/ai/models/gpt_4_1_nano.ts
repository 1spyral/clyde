import { ChatOpenAI } from "@langchain/openai"

export const gpt_4_1_nano = new ChatOpenAI({
    model: "gpt-4.1-nano",
})
