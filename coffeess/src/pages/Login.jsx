import { Link,useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('https://backend-coffeess.vercel.app/login', { email, password })
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                if (email === "admin@gmail.com" && password === "Admin@02") {
                    console.log("Login Success as Admin");
                    localStorage.setItem('loggedIn', 'true');
                    alert('Login successful!')
                    navigate('/product'); // Navigasi ke /product untuk admin
                } else {
                    console.log("Login Success");
                    localStorage.setItem('loggedIn', 'true');
                    alert('Login successful!')
                    navigate('/home'); // Navigasi ke /home untuk pengguna biasa
                }
            } else {
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
}

  return (
    <div className="min-h-screen flex items-center justify-center font-cuy">
      <div className="bg-green-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-md sm:w-96 md:w-96 lg:w-96 xl:w-96">
        <h2 className="text-2xl font-bold mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8">Login</h2>
        <form className="mb-2" onSubmit={handleSubmit}>
        <p className="has-text-centered"></p>
        <div className="mb-3">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter Password"
            />
          </div>
          <button
            className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-900 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>
        <div className="text-xs">
          Belum punya akun? <span className="text-green-700"><Link to="/register">Register </Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;