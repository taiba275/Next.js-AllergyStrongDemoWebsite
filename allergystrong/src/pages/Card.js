import React from 'react';
import Image from 'next/image';

const Card = ({ image, text }) => {
  return (
    <div className="cursor-pointer md:w-20 md:h-24 sm:20 lg:w-44 h-20 mb-5 transform transition-transform duration-300 hover:scale-110">
      <Image className="pb-5" src={image} alt="logo" width={27} height={27}/>
      <div className=''>
        <h1 className="md:text-md sm:text-md lg:text-xl font-bold">{text}</h1>
     </div>
    </div>
  );
};

export default Card;