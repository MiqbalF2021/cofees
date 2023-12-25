import React, {  useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';


// Fungsi calculateTotalPrice diubah menjadi fungsi terpisah di luar komponen

export const calculateTotalPrice = (cartItems, quantities) => {
  return cartItems.reduce((acc, item) => acc + item.price * quantities[item.id], 0);
};

const Cart = ({ cartItems }) => {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      // Navigasi kembali ke halaman login jika pengguna tidak login
      navigate('/login');
    }
  }, [navigate]);

  // Menginisialisasi quantities dan total harga saat komponen dimount
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
    setTotalPrice(calculateTotalPrice(cartItems, initialQuantities));
  }, [cartItems]);

  

  
  return (
    <div>
      <Nav />
      <div className='text-red-700 font-medium ml-20 font-cuy'>Produk di Cart akan dihapus ketika Logout!!</div>
      <div className='bg-emerald-50 m-4 sm:m-8 lg:m-10 shadow-md p-4 sm:p-6 lg:p-10 rounded-3xl mb-16 sm:mb-32 lg:mb-72 font-cuy'>
        
        {cartItems.map(item => (
          <div key={item.id} className='flex flex-col sm:flex-row'>
            <div className='w-full sm:w-40 mr-0 sm:mr-8'>
              <img src={item.imageUrl} alt={item.title} className='w-full' />
            </div>
            <div className='pr-4 sm:pr-8 my-auto'>
              <h1 className='text-lg sm:text-2xl font-bold mb-2 sm:mb-3'>{item.title}</h1>
              <h2 className='text-md sm:text-xl font-medium'>Rp{item.price}</h2>
            </div>
          </div>
        ))}
        <div className='text-xl font-semibold mt-4'>
          Total Harga: Rp{totalPrice}
        </div>
      </div>

      <div className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 bg-orange-500 text-white px-4 sm:px-8 py-3 sm:py-5 rounded-2xl font-medium shadow-xl hover:bg-orange-600'>
        <Link to="/pay">
          Pesan
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Cart