import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'; // Import useSession for session management
import Image from 'next/image';
import GoogleButton from './GoogleButton'; // Import your GoogleButton component

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Redirect if already logged in
  if (session) {
    router.replace('/');
    return null; // Return null to avoid rendering anything until redirect completes
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        const data = await response.json();
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="flex">
      <div className=" flex-1 bg-customGreen flex justify-center items-center min-h-screen">
      </div>
      <div className="w-80 bg-customGreen flex justify-center items-center min-h-screen">
      </div>
      <div className=" flex-1 flex justify-center items-center bg-white min-h-screen">
        <div className='ml-56 container mx-auto p-4 space-y-2 text-black'>
          <h1 className='font-bold text-2xl ml-28 pb-4'>Log In</h1>
          <form onSubmit={handleLogin}>
            <p className='text-md'>Username:</p>
            <input
              className="w-80 border rounded-md py-2 px-4"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter here"
            />
            <p className='text-md'>Password:</p>
            <input
              className="w-80 border rounded-md py-2 px-4"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter here"
            />
          
            <button className='mt-4 w-80 bg-customGreen2 p-2 text-white rounded-md text-center' type="submit">Log In</button>
          </form>
          <p className='text-sm pl-36 text-green-600'>Forgot Your Password?</p>
          <br/>
          <input type='checkbox'/> By creating an account, I agree to our<br/>Terms of use and Privacy Policy<br/><br/>
          <a href="/Signup" className="text-green-600 hover:text-green-600 pl-20">Don't have an account?</a>
          <GoogleButton /> 
        <button className='hover:bg-gray-100 flex w-80 border border-green-600 bg-white p-2 text-customGreen2 rounded-md text-center'>
            <Image className='mr-16' src={'/apple mac.png'} alt={'Google'} width={20} height={20}/>
            <p>Continue with Apple</p>
        </button>
        <button className='hover:bg-gray-100 flex w-80 border border-green-600 bg-white p-2 text-customGreen2 rounded-md text-center'>
            <Image className='mr-16' src={'/icon.png'} alt={'Google'} width={20} height={20}/>
            <p>Continue with Facebook</p>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
