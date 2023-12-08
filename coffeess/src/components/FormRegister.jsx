import React from 'react'
import { Link } from 'react-router-dom';

const FormRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-cuy">
      <div className="bg-green-50 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form className='mb-1'>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-900 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>
        <div className='text-xs'>
        Sudah punya akun? <span className='text-green-700'><Link to="/login">Login</Link></span>
        </div>
      </div>
    </div>
  )
}

export default FormRegister