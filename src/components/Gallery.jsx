
import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <div>
           <Image src="/photo.jpg" alt="not found" height="1080" width="1920"/>
        </div>
    );
};

export default Gallery;