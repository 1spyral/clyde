import gql from "graphql-tag"

export const GenerateChatResponseMutation = gql`
    mutation generateChatResponse(
        $channelId: ID!
        $content: String!
        $guildId: ID!
        $userId: ID!
    ) {
        generateChatResponse(
            input: {
                channelId: $channelId
                content: $content
                guildId: $guildId
                userId: $userId
            }
        )
    }
`
