import Head from 'next/head';
import Card from './Card'
import Article from './Article';
import Image from 'next/image';
import SideArticle from './SideArticle';
import Articles from './Articles'
import Footer from './Footer';


export default function About() {
  return (
    <div className="bg-white bg-fixed bg-cover bg-center justify-center items-center min-h-screen">
      <Head>
        <title>About Page</title>
      </Head>

      <div className="container px-0 max-w-full text-black bg-customGreen pb-2 p-16 flex flex-wrap">
        <h1 className='font-bold text-2xl md:ml-20 lg:ml-36'>About</h1>
      </div>

      <div className="container mx-auto px-0 max-w-full text-black p-5 flex flex-wrap justify-center">
      <div className="md:w-1/2">
        <div className="mt-10 md:ml-20 lg:ml-36">
          <h1 className="text-3xl font-bold mb-4">Empowering families with life-saving resources and support for food allergies</h1>
          <p className="text-sm text-customGray mb-4">AllergyStrong serves patients, caregivers and those responsible for protecting people with food allergies, paying particular attention to the underserved and at-risk community. AllergyStrong assists communities low-income patients and those who lack reliable access to food and health services by making allergy-free food more available.<br/><br/>Working with organizations and community partners to protect underserved children with food allergies; ensuring that at-risk families with food allergies are considered during humanitarian crises; representing patients to corporate, community and other interested and invested parties; and encouraging research and study focused on underserved and minority populations.</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="m-10 mt-10 lg:mr-40 mb-5">
          <Image
            src="/girlpic.png" alt='girl' width={592} height={390}
          />
        </div>
      </div>
    </div>

    <div className="container px-0 mx-auto max-w-full p-5 text-black flex flex-wrap justify-center">
      <div className="container flex ">
        <section className="w-1/3 p-2 text-black ">
          <Article image="/Rectangle 3.png"  heading="Access Educational Materials and Resources" text="Our platform offers a comprehensive library of educational materials and resources to help you understand and navigate the challenges of managing food allergies." />
        </section>
        <section className="w-1/3 p-2 text-black">
          <Article image="/Rectangle 3.png"  heading="Connect with Support Networks" text="Join our supportive community of individuals and families facing similar challenges. Share experiences, find guidance, and receive support." />
        </section>
        <section className="w-1/3 p-2 text-black ">
          <Article image="/Rectangle 3.png"  heading="Discover Allergy-Friendly Recipes" text="Browse our collection of delicious allergy-friendly recipes that are safe and nutritious for your entire family to enjoy." />
        </section>
      </div>
    </div>

    <div className="container px-0 mx-auto max-w-full p-5 text-black flex flex-wrap justify-center">
        <div className="container flex ">
            <section className="p-2 text-black ">
              <Articles image="/Rectangle 3(1).png"  heading="Discover Allergy-Safe Recipes, Educational Materials, and Support Networks" text="Working with organizations and community partners to protect underserved children with food allergies; ensuring that at-risk families with food allergies are considered during humanitarian crises; representing patients to corporate, community and other interested and invested parties; and encouraging research and study focused on underserved and minority populations." />
            </section>
        </div>
    </div>

    <Footer/>

    </div>
      );
}