import NextAuth from "next-auth"
const handler = NextAuth({
    session: {

    },
    providers: [
        {

        }
    ]
})

export { handler as GET, handler as POST }