import Layout from '../components/Layout';
import Head from 'next/head';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact - My Website</title>
      </Head>
      <div className="flex justify-center h-screen flex-col items-center">
        <h1 className="font-sora text-3xl font-semibold text-center w-416 h-40 leading-40.32 font-semibold mt-40">Food Allergy Life Journey</h1>
        
        <div className="flex justify-between gap-10">
          <div className="custom-rectangle relative">
            <p className="text-black text-sm font-bold absolute bottom-4 left-4">Age: 13-17</p>
            <div className="flex justify-end absolute bottom-4 right-4">
              <input type="radio" className="mr-2" />
            </div>
          </div>
          <div className="custom-rectangle relative">
            <p className="text-black text-sm font-bold absolute bottom-4 left-4">Age: 18-29</p>
            <div className="flex justify-end absolute bottom-4 right-4">
              <input type="radio" className="mr-2" />
            </div>
          </div>
          <div className="custom-rectangle relative">
            <p className="text-black text-sm font-bold absolute bottom-4 left-4">Age: 30-39</p>
            <div className="flex justify-end absolute bottom-4 right-4">
              <input type="radio" className="mr-2" />
            </div>
          </div>
          <div className="custom-rectangle relative">
            <p className="text-black text-sm font-bold absolute bottom-4 left-4">Age: 40-49</p>
            <div className="flex justify-end absolute bottom-4 right-4">
              <input type="radio" className="mr-2" />
            </div>
          </div>
          <div className="custom-rectangle relative">
            <p className="text-black text-sm font-bold absolute bottom-4 left-4">Age: 50+</p>
            <div className="flex justify-end absolute bottom-4 right-4">
              <input type="radio" className="mr-2" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-rectangle {
          width: 200px;
          height: 300px;
          background-color: #D1FAE5;
          border-radius: 12px;
          border-color: green;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
     
    </Layout>
  );
};

export default Contact;
