import Head from 'next/head';
import Card from './Card'
import Article from './Article';
import Image from 'next/image';
import SideArticle from './SideArticle';
import { useSession } from 'next-auth/react'
import PageHeader from '../components/PageHeader'
import Articlee from '../components/Article'
import LoginBanner from '../components/LoginBanner'

export default function Home() {

  const { status } = useSession()

  return (
    
    <div className="bg-white bg-fixed bg-cover bg-center justify-center items-center min-h-screen">
      <Head>
        <title>Home - Main Page</title>
      </Head>
      <div>
      <PageHeader />
      {status === 'authenticated' ? <Articlee /> : <LoginBanner />}
    </div>

      <div className="container mx-auto p-4">
        <section className="text-black bg-customGreen p-10 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 ml-4">Supporting Families<br/>Dealing with Food<br/>Allergies</h1>
          <p className="text-sm text-customGray mb-4 ml-4">Join us in making a difference for families<br/>affected by food allergies</p>
          <button className='bg-customGreen2 text-sm p-3 pl-12 pr-12 rounded-md ml-4 text-white'>Button</button>
        </section>
      </div>

    <div className="container mx-auto mt-4">
      <section className="flex justify-between items-center lg:ml-4 md:p-0 text-black">
        <h1 className="md:text-xl lg:text-2xl font-bold md:-ml-7">Common Allergies</h1>
        <p className="text-sm text-customGray cursor-pointer lg:mr-4 md:-mr-6">See all category</p>
      </section>
    </div>

      <div className="container mx-auto mb-4 p-4 flex justify-center space-between">
      <section className="w-1/7 p-4 bg-customGreen text-black mx-1 rounded-md">
        <Card image="/Ellipse 1.png" text="Pollen Allergy" />
      </section>
      <section className="w-1/7 p-4 bg-customGreen text-black mx-1 rounded-md">
        <Card image="/Ellipse 1.png" text="Food Allergies" />
      </section>
      <section className="w-1/7 p-4 bg-customGreen text-black mx-1 rounded-md">
        <Card image="/Ellipse 1.png" text="Pet Allergies" />
      </section>
      <section className="w-1/7 p-4 bg-customGreen text-black mx-1 rounded-md">
        <Card image="/Ellipse 1.png" text="Mold Allergy" />
      </section>
      <section className="w-1/7 p-4 bg-customGreen text-black mx-1 rounded-md">
        <Card image="/Ellipse 1.png" text="Latex Allergy" />
      </section>
      <section className="w-1/7 p-4 bg-customGreen text-black mx-1 rounded-md">
        <Card image="/Ellipse 1.png" text="Contact Dermatitis" />
      </section>
      <section className="w-1/7 p-4 bg-customGreen text-black mx-1 rounded-md">
        <Card image="/Ellipse 1.png" text="Insect Sting Allergy" />
      </section>
      </div>

    <div className="container mx-auto mt-10">
      <section className="flex justify-between items-center lg:ml-4 md:p-0 text-black">
        <h1 className="md:text-xl lg:text-2xl font-bold md:ml-5">Top Reads</h1>
      </section>
    </div>

    <div className="container mx-auto max-w-full text-black p-2 flex flex-wrap justify-center">
      <div className="container flex">
        <section className="w-1/4 p-4 text-black mx-2 ">
          <Article image="/Rectangle 8.png" subheading="ALLERGY" heading="Heading" text="Subheading with stay updated with the latest news, resources, and events." readmore="Read More" />
        </section>
        <section className="w-1/4 p-4 text-black mx-2 ">
          <Article image="/Rectangle 8.png" subheading="ALLERGY" heading="Heading" text="Subheading with stay updated with the latest news, resources, and events." readmore="Read more" />
        </section>
      </div><br/>
      <div className="container flex">
        <section className="w-1/4 p-4 text-black mx-2 ">
          <Article image="/Rectangle 8.png" subheading="ALLERGY" heading="Heading" text="Subheading with stay updated with the latest news, resources, and events."  readmore="Read More"/>
        </section>
        <section className="w-1/4 p-4 text-black mx-2 ">
          <Article image="/Rectangle 8.png" subheading="ALLERGY" heading="Heading" text="Subheading with stay updated with the latest news, resources, and events."  readmore="Read More"/>
        </section>
        <section className="w-1/4 -mt-80 ml-10 mr-10 flex">
        <Image src="/Line 4.png" alt="line" width={1} height={100}/>
          <div className="container md:mt-16 lg:mt-5">
            <section className="p-4 text-black mx-2 ">
              <SideArticle image="/Rectangle 12.png" subheading="ALLERGY"  text="Subheading with stay updated with the latest news, resources, and events."  readmore="Read More"/>
            </section>
            <section className="p-4 text-black mx-2 ">
              <SideArticle image="/Rectangle 12.png" subheading="ALLERGY"  text="Subheading with stay updated with the latest news, resources, and events."  readmore="Read More"/>
            </section>
            <section className="p-4 text-black mx-2 ">
              <SideArticle image="/Rectangle 12.png" subheading="ALLERGY"  text="Subheading with stay updated with the latest news, resources, and events."  readmore="Read More"/>
            </section>
          </div>
        </section>
      </div>
    </div>

    <div className="container mx-auto px-0 max-w-full text-black bg-customGreen3 p-10 flex flex-wrap justify-center">
      <div className="md:w-1/2">
        <div className="m-10 md:ml-20 lg:ml-40">
          <h1 className="text-3xl font-bold mb-4">Empowering families<br/>with life-saving<br/>resources and<br/>support for food<br/>allergies</h1>
          <p className="text-sm text-customGray mr-10 md:mr-10 lg:mr-60 mb-4">Our services and resources provide families in underserved communities with the tools they need to manage life-threatening food allergies. From educational materials to access to safe and nutritious food options, we are here to support you every step of the way.</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="m-10 mt-5 md:mr-20 lg:mr-40 mb-5">
          <video controls className="w-full">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

    <div className="container px-0 max-w-full text-black pt-10">
      <div>
        <div className="m-10 md:ml-20 lg:ml-40 flex">
          <h1 className="text-3xl font-bold mr-10 ">Empowering families with <br/>life-saving resources and support for food allergies</h1>
          <div className='container mr-40'>
            <p className="text-sm text-customGray mr-10 mt-8">Our services and resources provide families in underserved communities with the tools they need to manage life-threatening food allergies. From educational materials to access to safe and nutritious food options, we are here to support you every step of the way.</p>
          </div>
        </div>
         <div className="container mx-auto max-w-full text-black p-2 flex flex-wrap justify-center">
          <div className="container flex">
            <section className="w-1/3 p-4 text-black mx-2 ">
              <Article image="/Rectangle 3.png"  heading="Access Educational Materials and Resources" text="Our platform offers a comprehensive library of educational materials and resources to help you understand and navigate the challenges of managing food allergies." />
            </section>
            <section className="w-1/3 p-4 text-black mx-2 ">
              <Article image="/Rectangle 3.png"  heading="Connect with Support Networks" text="Join our supportive community of individuals and families facing similar challenges. Share experiences, find guidance, and receive support." />
            </section>
            <section className="w-1/3 p-4 text-black mx-2">
              <Article image="/Rectangle 3.png"  heading="Discover Allergy-Friendly Recipes" text="Browse our collection of delicious allergy-friendly recipes that are safe and nutritious for your entire family to enjoy." />
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}