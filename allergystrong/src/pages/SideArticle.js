import React from 'react';
import Image from 'next/image';

const SideArticle = ({ image, subheading, text, readmore }) => {
  return (
    <div className="flex cursor-pointer mx-auto transform transition-transform duration-300 hover:scale-110">
      <Image className="pb-5 pr-4" src={image} alt="title" width={160} height={108}/>
      <div className=''>
        <p className="w-20 text-white bg-customGray rounded-lg text-center text-sm font-bold">{subheading}</p>
        <p className="lg:text-lg md:text-md md:w-36 lg:w-80 font-bold text-black">{text}</p>
        <p className="text-sm text-green-700 hover:text-green-500">{readmore}</p>
     </div>
    </div>
  );
};

export default SideArticle;