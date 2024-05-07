import React from 'react';
import Image from 'next/image';

const Article = ({ image, heading, subheading, text, readmore }) => {
  return (
    <div className="cursor-pointer mx-auto transform transition-transform duration-300 hover:scale-110">
      <Image className="pb-5" src={image} alt="title" width={389} height={203}/>
      <div className=''>
        <p className="w-20 text-white bg-customGray rounded-lg text-center text-sm font-bold">{subheading}</p>
        <h1 className="text-md font-bold">{heading}</h1>
        <p className="text-sm text-customGray">{text}</p>
        <p className="text-sm text-green-700 hover:text-green-500">{readmore}</p>
     </div>
    </div>
  );
};

export default Article;