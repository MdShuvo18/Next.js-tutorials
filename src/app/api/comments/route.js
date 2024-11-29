export async function GET() {
    return await Response.json({
        comments
    })
}

export async function POST(request) {
    const newComment = await Response.json()
    comments.push({
        id: comments.length + 1,
        comment: newComment.text
    })
    return await Response.json({
        message: "comment added successfully",
        comments
    })
}



const comments = [
    {
        id: 1,
        comment: "1st comment"
    },
    {
        id: 2,
        comment: "2nd comment"
    },
    {
        id: 3,
        comment: "3rd comment"
    },
]