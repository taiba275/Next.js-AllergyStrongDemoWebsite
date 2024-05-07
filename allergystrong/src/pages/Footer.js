
const Footer = () => {
    return (
        <div className="flex container mx-auto px-0 max-w-full text-black bg-customGreen3 p-10 flex-wrap md:pl-20 lg:pl-36">
            <div className='container w-1/3'>
              <h1 className='font-bold'>Get our wellness newsletter</h1>
              <p className="text-sm text-customGray">Filter out the noise and nurture your inbox with health and wellness advice that's inclusive and rooted in medical expertise.</p>
              <br/>
              <div className='flex'>
                  <input 
                  className='mr-2 pl-4 pr-60 text-sm'
                  placeholder='Enter your email' 
                  type='email'
                  />
                  <button className='hover:bg-green-600 bg-customGreen2 text-white rounded-md pt-1 pb-1 pr-6 pl-6'>Sign Up</button>
              </div><br/>
              <p className="text-sm text-customGray">Your privacy is important to us. Any information you provide to us via this website may be placed by us on servers located in countries outside of the EU. If you do not agree to such placement, do not provide the information.</p>
            </div>

            <div className='container w-1/3 pl-36'>
                <a href="/About" className="text-black hover:text-gray-500">About us</a><br/>
                <a href="/Contact" className="text-black hover:text-gray-500 ">Contact us</a><br/>
                <a href="/Settings" className="text-black hover:text-gray-500">Privacy setting</a><br/>
                <a href="/" className="text-black hover:text-gray-500">Health Topics</a><br/>
            </div>
            
            <div className='container w-1/3 -ml-36'>
                <p className="text-sm text-customGray">© 2024 AllergyStrong. All rights reserved. Our website services, content, and products are for informational purposes only. AllergyStrong does not provide medical advice, diagnosis, or treatment. See additional information.</p>
            </div>
        </div>
    );
}

export default Footer;