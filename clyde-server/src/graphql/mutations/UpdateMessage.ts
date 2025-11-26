import { messages } from "@/db/schema"
import { builder } from "../builder"
import { MessageRef } from "../types"

builder.mutationField("updateMessage", t =>
    t.field({
        type: MessageRef
    }
    )
)
