import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, {useEffect} from 'react';

const NavAdmin = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('loggedIn');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lakukan proses logout, misalnya menghapus data login dari localStorage
    localStorage.removeItem('loggedIn');

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
  <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center mb-4 md:mb-0">
      <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Dashboard Admin.</span>
    </a>
    <div className="flex flex-col md:flex-row" id="navbar-default">
      <ul className="flex gap-4 md:gap-10 font-bold mb-4 md:mb-0">
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