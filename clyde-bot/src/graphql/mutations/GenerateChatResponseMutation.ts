import gql from "graphql-tag"

export const GenerateChatResponseMutation = gql`
    mutation generateChatResponse(
        $id: ID!
        $channelId: ID!
        $guildId: ID!
        $userId: ID!
        $content: String!
    ) {
        generateChatResponse(
            input: {
                id: $id
                channelId: $channelId
                guildId: $guildId
                userId: $userId
                content: $content
            }
        )
    }
`
