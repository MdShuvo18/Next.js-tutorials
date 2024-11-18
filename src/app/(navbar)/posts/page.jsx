import { getPosts } from '@/shared/getPosts';
import React from 'react';


const page = async () => {
    const posts = await getPosts();
    return (
        <div>
           <h1 className='text-xl font-bold text-center'> All posts</h1>
            <div className='grid grid-cols-4 gap-2'>
                {
                    posts?.slice(0, 20)?.map(post => <div key={post.id} className='p-2 border-2'>

                        <h3><span className='text-xl font-bold'>Title</span> : {post.title}</h3>
                        <p><span className='text-xl font-bold'>Description</span> : {post.body}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;