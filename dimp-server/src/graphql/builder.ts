import SchemaBuilder from "@pothos/core"
import { DateTimeResolver, JSONResolver } from "graphql-scalars"
import { Context } from "."

export const builder = new SchemaBuilder<{
    Context: Context
    Scalars: {
        JSON: {
            Input: unknown
            Output: unknown
        }
        DateTime: {
            Input: Date
            Output: Date
        }
    }
}>({})

builder.addScalarType("DateTime", DateTimeResolver, {})
builder.addScalarType("JSON", JSONResolver, {})

builder.queryType({})
builder.mutationType({})
