import Head from 'next/head';
import Layout from '../components/Layout'; // Assuming you have a components folder with Layout component

export default function FoodAllergyPage() {
  return (
    <Layout>
      <Head>
        <title>Food Allergy Life Journey</title>
      </Head>

      <main>
        <h1 className="title">Food Allergy Life Journey</h1>
        <p className="caption">What type of diet do you prefer?</p>

        <div className="container mx-auto mt-8 flex justify-center pl-4">
          <div className="flex justify-between w-105">
            <div className="flex flex-col mr-4">
              <div className="rectangle bg-green-200 border-green-300 w-80 h-12 mb-4 relative">
                <p className="text-bold absolute left-4 top-1">Tradition</p>
                <p className="text-xs absolute left-4 bottom-2">I enjoy everything</p>
                <input type="radio" className="radio-button absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
              <div className="rectangle bg-green-200 border-green-300 w-80 h-12 mb-4 relative">
                <p className="text-bold absolute left-4 top-1">Tradition</p>
                <p className="text-xs absolute left-4 bottom-2">I enjoy everything</p>
                <input type="radio" className="radio-button absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
              <div className="rectangle bg-green-200 border-green-300 w-80 h-12 mb-4 relative">
                <p className="text-bold absolute left-4 top-1">Tradition</p>
                <p className="text-xs absolute left-4 bottom-2">I enjoy everything</p>
                <input type="radio" className="radio-button absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
              <div className="rectangle bg-green-200 border-green-300 w-80 h-12 relative">
                <p className="text-bold absolute left-4 top-1">Tradition</p>
                <p className="text-xs absolute left-4 bottom-2">I enjoy everything</p>
                <input type="radio" className="radio-button absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rectangle bg-green-200 border-green-300 w-80 h-12 mb-4 relative">
                <p className="text-bold absolute left-4 top-1">Tradition</p>
                <p className="text-xs absolute left-4 bottom-2">I enjoy everything</p>
                <input type="radio" className="radio-button absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
              <div className="rectangle bg-green-200 border-green-300 w-80 h-12 mb-4 relative">
                <p className="text-bold absolute left-4 top-1">Tradition</p>
                <p className="text-xs absolute left-4 bottom-2">I enjoy everything</p>
                <input type="radio" className="radio-button absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
              <div className="rectangle bg-green-200 border-green-300 w-80 h-12 mb-4 relative">
                <p className="text-bold absolute left-4 top-1">Tradition</p>
                <p className="text-xs absolute left-4 bottom-2">I enjoy everything</p>
                <input type="radio" className="radio-button absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
              <div className="rectangle bg-green-200 border-green-300 w-80 h-12 relative">
                <p className="text-bold absolute left-4 top-1">Tradition</p>
                <p className="text-xs absolute left-4 bottom-2">I enjoy everything</p>
                <input type="radio" className="radio-button absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .title {
          font-size: 24px;
          font-weight: bold;
          color: black;
          margin-top: 40px;
          text-align: center;
        }
        .caption {
          font-size: 18px;
          color: black;
          margin-top: 20px;
          text-align: center;
        }
        .rectangle {
          border-radius: 8px;
          background-color: grey-100;
          border: 1px green-300;
          position: relative;
        }
        
        .radio-button {
            position: absolute;
            top: 50%;
            right: 4px;
            transform: translateY(-50%);
            cursor: pointer;
          }
          
      `}</style>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Layout>
  );
}
