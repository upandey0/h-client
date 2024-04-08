import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '@/features/userSlice';
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack';


const SignInForm = () => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:8080/api/user/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
    const data = await response.json();
    console.log(data)
    if (data.success) {
      data.isAuthenticated = true
      dispatch(fetchUser(data));
      navigate('/')
      enqueueSnackbar('Sign In successful!', {
        variant: 'success',
        autoHideDuration: 3000,
      });
  } else{
    enqueueSnackbar(data.message , {
      variant: 'failure',
      autoHideDuration: 3000
    })
  }
}
return (
  <div className="flex justify-center items-center h-full bg-gray-100">
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
);
};

export default SignInForm;