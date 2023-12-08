import React from 'react'
import { Link } from 'react-router-dom';

const FormRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-cuy">
  <div className="bg-green-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-md sm:w-96 md:w-96 lg:w-96 xl:w-96">
    <h2 className="text-2xl font-bold mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8">Register</h2>
    <form className='mb-2'>
      <div className="mb-3">
        <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-1">
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
      <div className="mb-3">
        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-1">
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
      Sudah punya akun? <span className='text-green-700'><Link to="/login">Login </Link></span>
    </div>
  </div>
</div>

  )
}

export default FormRegister