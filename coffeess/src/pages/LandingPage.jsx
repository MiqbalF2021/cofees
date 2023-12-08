import React from 'react';
import cofee from '../img/cofee.png'
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import Navv from '../components/Navv';

const LandingPage = () => {
  return (
    <div>
      <Navv />
      <section className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row mx-auto my-auto px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
  <div className='sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 my-auto'>
    <div>
      <h2 className='text-neutral-950 text-3xl uppercase font-bold mb-3 font-cuy'>
        <span className='text-green-700 font-extrabold'>Coffeess.</span>
        <br /> Rasa, Aroma dan Kesenangan.
      </h2>
      <p className='font-medium text-xl font-cuy'>
        Rasakan Keajaiban dalam Setiap Tetes Kopi! Nikmati Sensasi Cita Rasa Terbaik, Hanya di Sini!
      </p>
      <div className='m-3 '>
        <Link to="/login">
          <Button color="success" className='font-cuy'>Login</Button>
        </Link>
      </div>
    </div>
  </div>
  <div className='sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2'>
    <div className='w-full my-auto mx-auto'>
      <img src={cofee} alt="" className='w-full' />
    </div>
  </div>
</section>

    </div>
    
  );
};

export default LandingPage;