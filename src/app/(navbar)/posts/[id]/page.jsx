import { getPostDetails } from '@/shared/getPosts';
import React from 'react';

export const metadata = {
    title:{
        absolute:"post details"   //here it only show the post details in the title field
    },
    description: "This is from post details",
  };
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