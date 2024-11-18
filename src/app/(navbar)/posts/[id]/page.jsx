import { getPostDetails } from '@/shared/getPosts';
import React from 'react';

const page = async ({ params }) => {
    const postDetails = await getPostDetails(params.id)
    console.log(postDetails);
    return (
        <div>
            <h2>Post details : {postDetails.title}</h2>
            <h3> Post details : {postDetails.body}</h3>
        </div>
    );
};

export default page;