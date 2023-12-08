import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
  return (
    <nav className="bg-white mb-4 md:mb-8 lg:mb-12 font-cuy">
  <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center mb-4 md:mb-0">
      <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Coffeess.</span>
    </a>
    <div className="flex flex-col md:flex-row" id="navbar-default">
      <ul className="flex gap-4 md:gap-10 font-bold mb-4 md:mb-0">
        <li>
          <Link
            to="/home"
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 ${
              location.pathname === '/home' ? 'text-green-500' : 'hover:text-green-400'
            } md:hover:bg-transparent md:p-0 dark:text-white ${
              location.pathname === '/home' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'
            } md:dark:hover:bg-transparent md:text-center md:w-1/4`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 ${
              location.pathname === '/about' ? 'text-green-500' : 'hover:text-green-400'
            } md:hover:bg-transparent md:p-0 dark:text-white ${
              location.pathname === '/about' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'
            } md:dark:hover:bg-transparent md:text-center md:w-1/4`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 ${
              location.pathname === '/menu' ? 'text-green-500' : 'hover:text-green-400'
            } md:hover:bg-transparent md:p-0 dark:text-white ${
              location.pathname === '/menu' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'
            } md:dark:hover:bg-transparent md:text-center md:w-1/4`}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 ${
              location.pathname === '/cart' ? 'text-green-500' : 'hover:text-green-400'
            } md:hover:bg-transparent md:p-0 dark:text-white ${
              location.pathname === '/cart' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'
            } md:dark:hover:bg-transparent md:text-center md:w-1/4`}
          >
            Cart
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Nav