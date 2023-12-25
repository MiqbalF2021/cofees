
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
    const location = useLocation();
    const isLoggedIn = localStorage.getItem('loggedIn');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
      // Lakukan proses logout, misalnya menghapus data login dari localStorage
      localStorage.removeItem('loggedIn');
      // Clear cart items from local storage
      localStorage.removeItem('cartItems');
      window.location.reload();

    };

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
      setMenuOpen(false);
    };
  return (
    <nav className="bg-white mb-4 md:mb-8 lg:mb-12 font-cuy">
      <div className="max-w-screen-xl flex flex-row md:flex-row items-center justify-between mx-auto p-4 relative">
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <span className="self-center text-2xl md:text-3xl font-bold whitespace-nowrap dark:text-white">Coffeess.</span>
        </a>
        <div className="md:hidden">
          {menuOpen ? (
            <button
              onClick={closeMenu}
              className="text-gray-900 dark:text-white focus:outline-none focus:text-green-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white focus:outline-none focus:text-green-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            )}
        </div>
        <div
          className={`${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0 transform transition-transform duration-300 md:transition-none w-1/4 h-1/2 md:w-auto md:flex flex-col md:flex-row items-end md:items-stretch fixed top-16 md:top-0 lg:top-0 xl:top-0 2xl:top-0 right-0 bg-white md:h-auto p-4 md:p-0 md:relative z-20`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10 font-bold mb-4 md:mb-4 md:my-auto md:text-left">
            <li>
              <Link
                to="/home"
                className={`block py-2 px-3 text-sm md:text-base text-gray-900 rounded hover:bg-gray-100 md:border-0
                ${location.pathname === '/home' ? 'text-green-500' : 'hover:text-green-400'}
                md:hover:bg-transparent md:p-0 dark:text-white
                ${location.pathname === '/home' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'}`}
              >
                Home
              </Link>
            </li>
          <li>
            <Link
              to="/about"
              className={`block py-2 px-3 text-sm md:text-base text-gray-900 rounded hover:bg-gray-100 md:border-0
                ${location.pathname === '/about' ? 'text-green-500' : 'hover:text-green-400'}
                md:hover:bg-transparent md:p-0 dark:text-white
                ${location.pathname === '/about' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={`block py-2 px-3 text-sm md:text-base text-gray-900 rounded hover:bg-gray-100 md:border-0
                ${location.pathname === '/menu' ? 'text-green-500' : 'hover:text-green-400'}
                md:hover:bg-transparent md:p-0 dark:text-white
                ${location.pathname === '/menu' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'}`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`block py-2 px-3 text-sm md:text-base text-gray-900 rounded hover:bg-gray-100 md:border-0
                ${location.pathname === '/cart' ? 'text-green-500' : 'hover:text-green-400'}
                md:hover:bg-transparent md:p-0 dark:text-white
                ${location.pathname === '/cart' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'}`}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLogout}
              to="/login"
              className={`block py-2 px-3 text-sm md:text-base text-gray-900 rounded hover:bg-gray-100 md:border-0
                ${location.pathname === '/logout' ? 'text-green-500' : 'hover:text-green-400'}
                md:hover:bg-transparent md:p-0 dark:text-white
                ${location.pathname === '/logout' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'}`}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Nav