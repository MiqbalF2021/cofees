import { Link,useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const validatePassword = (inputPassword) => {
      const regexUpperCase = /[A-Z]/;
      const regexLowerCase = /[a-z]/;
      const regexNumber = /[0-9]/;
      const regexSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    
      if (
        !regexUpperCase.test(inputPassword) ||
        !regexLowerCase.test(inputPassword) ||
        !regexNumber.test(inputPassword) ||
        !regexSpecialChar.test(inputPassword) ||
        inputPassword.length < 8
      ) {
        setPasswordError(
          "Password harus mengandung huruf besar, huruf kecil, angka, karakter khusus, dan minimal 8 karakter."
        );
        return false;
      } else {
        setPasswordError("");
        return true;
      }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validasi password
  if (!validatePassword(password)) {
    return;
  }
        
        axios.post( 'https://backend-coffeess.vercel.app/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
    }
  return (
    <div className="min-h-screen flex items-center justify-center font-cuy">
      <div className="bg-green-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-md sm:w-96 md:w-96 lg:w-96 xl:w-96">
        <h2 className="text-2xl font-bold mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8">Register</h2>
        <form className="mb-2" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              name="email"
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
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
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter Password"
            />
            {passwordError && (
            <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>
          <button 
            className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-900 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>
        <div className="text-xs">
          Sudah punya akun? <span className="text-green-700"><Link to="/login">Login </Link></span>
        </div>
      </div>
    </div>
  );
};

export default Register;