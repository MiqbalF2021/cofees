import Footer from '../components/Footer';
import Nav from '../components/Nav'
import IcedCoffee from '../img/IcedCoffee.png'
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <Nav />
      <div className='bg-emerald-50 m-4 sm:m-8 lg:m-10 shadow-md p-4 sm:p-6 lg:p-10 rounded-3xl mb-16 sm:mb-32 lg:mb-72 font-cuy'>
  <div className='flex flex-col sm:flex-row'>
    <div className='w-full sm:w-40 mr-0 sm:mr-8'>
      <img src={IcedCoffee} alt="product" className='w-full' />
    </div>
    <div className='pr-4 sm:pr-8 my-auto'>
      <h1 className='text-lg sm:text-2xl font-bold mb-2 sm:mb-3'>Title Product</h1>
      <h2 className='text-md sm:text-xl font-medium'>Rp40000</h2>
    </div>
    <div className='flex items-center my-auto mx-auto'>
      <h2 className='mr-4 sm:mr-10 text-sm sm:text-lg font-bold'>Jumlah</h2>
      <button
        className='bg-orange-500 rounded-md text-white px-2 sm:px-4 mr-1 sm:mr-4 py-1 sm:py-2 hover:bg-orange-600'
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className='text-md sm:text-xl'>{quantity}</span>
      <button
        className='bg-emerald-600 rounded-md text-white px-2 sm:px-4 ml-1 sm:ml-4 py-1 sm:py-2 hover:bg-emerald-700'
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  </div>
</div>

<div className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 bg-orange-500 text-white px-4 sm:px-8 py-3 sm:py-5 rounded-2xl font-medium shadow-xl hover:bg-orange-600'>
  <Link to="/pay">
    Bayar
  </Link>
</div>

      
      <Footer />
    </div>
  )
}

export default Cart