import React from 'react';
import cofee from '../img/cofee.png'
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

const LandingPage = () => {
  return (
    <section className='flex mx-auto my-auto px-60 py-40 '>
      <div className='my-auto'>
        <div >
          <h2 className='text-neutral-950 text-3xl uppercase font-bold mb-3 font-cuy'>
            <span className='text-green-700 font-extrabold'>Coffeess.</span>
             <br/> Rasa, Aroma dan Kesenangan.
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
      <div>
        <div className='w-80 my-auto mx-auto'>
          <img src={cofee} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;