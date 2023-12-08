
'use client';

import Nav from "../components/Nav";
import IcedCoffee from '../img/IcedCoffee.png'
import Warung from '../img/Warung.jpeg'
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div className='bg-white'>
  <Nav />
  <div className="container mx-auto font-cuy">
    {/* Section 1: Jumbotron with Image on the Right */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20 lg:px-24 bg-emerald-50 shadow-md rounded-3xl p-4 md:p-5">
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <img src={IcedCoffee} alt="Coffee" className="w-full h-auto max-w-md mx-auto md:mx-0" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Menu Unggulan</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Ice Coffee Latte</h2>
        <p className="text-gray-600 mb-4">
          Dibuat dengan biji kopi Indonesia pilihan, menghadirkan pengalaman espresso yang luar biasa. Kombinasi biji kopi berkualitas tinggi dari perkebunan terbaik Indonesia menciptakan cairan hitam pekat dengan cita rasa yang mendalam.
        </p>
        <button className='px-4 py-4 bg-orange-600 rounded-xl shadow-md hover:bg-orange-700 text-white flex justify-center'>
          <Link to="/menu">
            Pesan Sekarang
          </Link>
        </button>
      </div>
    </div>

    {/* Section 2: Jumbotron with Image on the Left */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-8 px-4 md:px-20 lg:px-24 bg-orange-50 rounded-3xl shadow-md mb-20 p-4 md:p-10">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sejarah</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Judul Sejarah</h2>
        <p className="text-gray-600 mb-4">
          Didirikan pada tahun 2023, Coffeess adalah startup kopi yang bercita-cita membuat kopi spesial terbaik untuk pelanggan. Dengan semangat inovatif dan komitmen untuk menyajikan pengalaman kopi yang tak terlupakan, Coffeess segera menjadi pusat perhatian di dunia kopi. Tim yang terdiri dari para ahli kopi, roaster berbakat, dan penggemar kopi sejati berkolaborasi untuk menciptakan campuran unik yang menggoda selera.
        </p>
        <button className='px-4 py-4 bg-emerald-600 rounded-xl shadow-md hover:bg-emerald-700 text-white flex justify-center'>
          <Link to="/about">
            Lihat Selengkapnya
          </Link>
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img src={Warung} alt="History" className="w-full h-auto max-w-md mx-auto md:mx-0 rounded-3xl" />
      </div>
    </div>
  </div>
  <Footer />
</div>

    
  );
};


export default HomePage;
