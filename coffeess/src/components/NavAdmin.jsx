import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, {useEffect} from 'react';
import { useState } from 'react';

const NavAdmin = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('loggedIn');
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    // Lakukan proses logout, misalnya menghapus data login dari localStorage
    localStorage.removeItem('loggedIn');

  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      // Navigasi kembali ke halaman login jika pengguna tidak login
      navigate('/login');
    }
  }, [navigate]);
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
          } md:translate-x-0 transform transition-transform duration-300 md:transition-none w-1/2 h-1/4 md:w-auto md:flex flex-col md:flex-row items-end md:items-stretch fixed top-16  md:top-0 lg:top-0 xl:top-0 2xl:top-0 right-0 bg-transparent md:h-auto p-4 md:p-0 md:relative z-20`}
        >
      <ul className="flex flex-col md:flex-row gap-4 md:gap-10 font-bold mb-4 md:mb-0 text-right md:text-left">
        <li>
          <Link
            to="/transaksi"
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 ${
              location.pathname === '/transaksi' ? 'text-green-500' : 'hover:text-green-400'
            } md:hover:bg-transparent md:p-0 dark:text-white ${
              location.pathname === '/transaksi' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'
            } md:dark:hover:bg-transparent md:text-center md:w-1/4`}
          >
            Kelola Pesanan
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 ${
              location.pathname === '/product' ? 'text-green-500' : 'hover:text-green-400'
            } md:hover:bg-transparent md:p-0 dark:text-white ${
              location.pathname === '/product' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'
            } md:dark:hover:bg-transparent md:text-center md:w-1/4`}
          >
            Add Product
          </Link>
        </li>
        <li>
          <Link
            to="/manage"
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 ${
              location.pathname === '/manage' ? 'text-green-500' : 'hover:text-green-400'
            } md:hover:bg-transparent md:p-0 dark:text-white ${
              location.pathname === '/manage' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'
            } md:dark:hover:bg-transparent md:text-center md:w-1/4`}
          >
            Manage Product
          </Link>
        </li>
        <li>
          <Link
          onClick={handleLogout}
            to="/login"
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 ${
              location.pathname === '/logout' ? 'text-green-500' : 'hover:text-green-400'
            } md:hover:bg-transparent md:p-0 dark:text-white ${
              location.pathname === '/logout' ? 'md:dark:hover:text-green-800' : 'dark:hover:text-white'
            } md:dark:hover:bg-transparent md:text-center md:w-1/4`}
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

export default NavAdmin