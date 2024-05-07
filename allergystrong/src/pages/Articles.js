import React from 'react';
import Image from 'next/image';

const endArticles = ({ image, heading, text }) => {
  return (
    <div className="flex cursor-pointer mx-auto transform transition-transform duration-300 hover:scale-110">
      <Image className="pb-5" src={image} alt="title" width={587} height={249}/>
      <div className='px-4'>
        <h1 className="text-xl font-bold">{heading}</h1>
        <p className="text-sm text-customGray">{text}</p>
     </div>
    </div>
  );
};

export default endArticles;