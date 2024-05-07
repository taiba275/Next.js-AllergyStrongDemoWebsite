import Layout from '../components/Layout';
import { useState } from 'react';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true); 

  return (
    <Layout>
   <section className="bg-green-100 py-32 text-black relative">
  <div className="container mx-auto text-left">
    <p className="text-white bg-blue-400 rounded-md px-2 py-1 ml-20 inline-block">Allergy</p>
    <h3 className="text-4xl mb-4 ml-20">Supporting Families</h3> 
    <h3 className="text-4xl mb-4 ml-20">Dealing with Food Allergies</h3> 
  </div>
</section>


<br></br>

<div className="container mx-auto text-left pl-20"> {/* Adjusted margin here */}
        <div className="flex items-center mt-auto">
          <img src="hero-image.jpg" alt="Profile Picture" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="text-black font-semibold">By Theresa Webb<span>on Feburary 27, 2024</span></p>
            <p className="text-gray-600">Join us in making a difference for families</p>
            <p className="text-gray-600">affected by food Allergies</p>
          </div>
        </div>
      </div>
<br></br>

<div className="container mx-auto text-left flex">
  <div className="video-container ml-20 mt-4" style={{ width: '800px', height: '500px' }}>
    {isPlaying && (
      <video width="100%" height="100%" controls>
        <source src="/your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
  <div className="ml-4">
    <div className="video-container" style={{ width: '300px', height: '200px' }}>
      <video width="100%" height="100%" controls>
        <source src="/your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-center">Using sound to model the world</p>
    </div>
    <div className="video-container mt-4" style={{ width: '300px', height: '200px' }}>
      <video width="100%" height="100%" controls>
        <source src="/your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-center">A faster experiment to learn and study  topological materials</p>
    </div>
    <div className="video-container mt-4" style={{ width: '300px', height: '200px' }}>
      <video width="100%" height="100%" controls>
        <source src="/your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-center">A better way to  tell which species are vulnerable</p>
    </div>
  </div>
</div>

        <div className="container mx-auto text-left" style={{ width: '800px', marginLeft: '10rem' }}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla sapien velit, a eleifend risus volutpat sed. Integer volutpat, lorem sit amet laoreet varius, elit velit varius velit, nec blandit ex turpis eu arcu.
  </p>
  <p>
    Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus.
  </p>
  <p>
    Aenean nec est non ipsum consequat viverra ut id neque. In hac habitasse platea dictumst. Suspendisse potenti. Phasellus rhoncus, eros nec ultrices consectetur, dolor ex ullamcorper nisi, nec fringilla nulla felis quis justo. Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus
  </p>
  <p>
    Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus. Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus
  </p>
  <p>
    Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus. Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus
  </p>
  <p>
    Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus. Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus
  </p>
  <p>
    Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus. Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus
  </p>
  <p>
    Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus. Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus
  </p>
  <p>
    Nunc hendrerit interdum orci, vel consectetur quam bibendum ac. Phasellus pretium a nisl at rhoncus. Morbi non justo at elit aliquam fermentum nec ac erat.
  </p>
  <p>
    Nulla lobortis orci in justo eleifend, in bibendum ligula varius. Nam nec eros a urna volutpat viverra. In hac habitasse platea dictumst. Pellentesque sit amet est a odio ullamcorper lacinia. In varius nibh id augue posuere bibendum. Fusce nec nisi et nulla gravida fermentum ac sed lacus
  </p>
  <div className="flex items-center mt-4">
    <span className="text-black px-2 py-1">Tag</span>
    <span className="ml-2">
      <span className="text-white bg-gray-400 rounded-full px-2 py-1">Allergy</span>
      <span className="text-white bg-gray-400 rounded-full px-2 py-1 ml-2">Classroom</span>
      <span className="text-white bg-gray-400 rounded-full px-2 py-1 ml-2">Elementary</span>
      <span className="text-white bg-gray-400 rounded-full px-2 py-1 ml-2">High School</span>
      <span className="text-white bg-gray-400 rounded-full px-2 py-1 ml-2">Public</span>
      <span className="text-white bg-gray-400 rounded-full px-2 py-1 ml-2">Allergy</span>
    </span>
  </div>
</div>
<br></br>
      <div className="container mx-auto text-left" style={{ width: '800px', marginLeft: '10rem' }}>
        <form className="bg-gray-200 p-4 rounded-lg">
          <h4 className="text-lg font-bold mb-2">Leave a reply</h4>
         
          <p className="text-sm text-gray-500 mb-4">Your email address will not be published. Required fields are marked *</p>

          <label htmlFor="comments" className="block mb-2">Comments:</label>
          <textarea id="comments" className="block w-full p-2 mb-4 border border-gray-300 rounded-lg" rows="4"></textarea>

          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input type="text" id="name" className="block w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="website" className="block mb-2">Website:</label>
              <input type="text" id="website" className="block w-full p-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <label htmlFor="email" className="block mb-2">Email:</label>
          <input type="email" id="email" className="block w-full p-2 mb-4 border border-gray-300 rounded-lg" />

          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Post Comment</button>
        </form>
      </div>
     
    </Layout>
  );
};

export default Home;
