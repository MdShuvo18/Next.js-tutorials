"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()  //you have to must import this on next/navigation
    const links = [
        {
            title: "About",
            path: '/about',

        },
        {
            title: "Service",
            path: '/service',
        },
        {
            title: "Blogs",
            path: '/blogs',
        }
    ]

    if (pathName.includes('dashboard'))
        return (
            <div className='bg-green-300'>Dashboard Layout</div>
        )
    return (
        <div className="bg-cyan-300 px-5 py-5 flex justify-between items-center">

            <h4 className='text-xl font-bold'>Next <span className='text-yellow-500'>Hero</span></h4>
            <ul className='flex justify-between items-center space-x-2'>
                {
                    links.map((link) => <Link className={`${pathName === link.path ? 'text-red-300 font-bold' : ''}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button className='btn' onClick={() => router.push('/login')}>Login</button>
        </div>
    );
};

export default Navbar;