import { getPosts } from '@/shared/getPosts';
import Link from 'next/link';
import React from 'react';


const page = async () => {
    const posts = await getPosts();
    // console.log(posts);
    return (
        <div>
           <h1 className='text-xl font-bold text-center'> All posts</h1>
            <div className='grid grid-cols-4 gap-2'>
                {
                    posts?.slice(0, 20)?.map(({title,body,id}) => <div key={id} className='p-2 border-2'>

                        <h3><span className='text-xl font-bold'>Title</span> : {title}</h3>
                        <p><span className='text-xl font-bold'>Description</span> : {body}</p>
                        <button className='bg-red-300 p-2'><Link href={`/posts/${id}`}>Details</Link></button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;