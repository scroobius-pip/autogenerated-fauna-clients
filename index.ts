import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated/sdk'

const client = new GraphQLClient('https://graphql.fauna.com/graphql', {
    headers: {
        Authorization: '',
        'X-Schema-Preview': ''
    }

})

const sdk = getSdk(client)



async function main() {

    const { createUser } = await sdk.createUser({
        input: {
            email: "email",
            name: "name",
            country: "ng"
        }
    })


    const { findUserByID } = await sdk.findUser({ id: "" })

    // sdk.
}