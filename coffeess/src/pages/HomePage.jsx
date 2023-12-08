
'use client';

import { Button } from 'flowbite-react';
import Nav from "../components/Nav";
import IcedCoffee from '../img/IcedCoffee.png'
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className='bg-orange-50'>
      <Nav/>
      <div className="container mx-auto font-cuy">
      {/* Section 1: Jumbotron with Image on the Right */}
      <div className="flex items-center justify-between px-20">
        <div className="w-1/2 pr-8">
          <img src={IcedCoffee} alt="Coffee" className="w-full h-auto max-w-md" />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Menu unggulan</h1>
          <h2 className="text-2xl font-semibold mb-2">Ice Coffee Latte</h2>
          <p className="text-gray-600 mb-4 ">
          dibuat dengan biji kopi Indonesia pilihan, menghadirkan pengalaman espresso yang luar biasa. Kombinasi biji kopi berkualitas tinggi dari perkebunan terbaik Indonesia menciptakan cairan hitam pekat dengan cita rasa yang mendalam
          </p>
          <Button color="success">Pesan Sekarang</Button>
        </div>
      </div>

      {/* Section 2: Jumbotron with Image on the Left */}
      <div className="flex items-center justify-between mt-8 px-20">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Sejarah</h1>
          <h2 className="text-2xl font-semibold mb-2">Judul Sejarah</h2>
          <p className="text-gray-600 mb-4">
          Didirikan pada tahun 2023, Coffeess adalah startup kopi yang bercita-cita membuat kopi spesial terbaik untuk pelanggan. Dengan semangat inovatif dan komitmen untuk menyajikan pengalaman kopi yang tak terlupakan, Coffeess segera menjadi pusat perhatian di dunia kopi. Tim yang terdiri dari para ahli kopi, roaster berbakat, dan penggemar kopi sejati berkolaborasi untuk menciptakan campuran unik yang menggoda selera.
          </p>
          <Button color="success">Lihat selengkapnya</Button>
        </div>
        <div className="w-1/2 pl-8">
          <img src={IcedCoffee} alt="History" className="w-full h-auto max-w-md" />
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};


export default HomePage;
