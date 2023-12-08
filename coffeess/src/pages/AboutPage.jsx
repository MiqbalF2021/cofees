import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import IcedCoffee from '../img/IcedCoffee.png'
import { Button } from 'flowbite-react';

const AboutPage = () => {
  return (
    <div>
        <Nav />
        <div className="container mx-auto font-cuy bg-white"> 
            {/* Section 1: Jumbotron with Image on the Right */}
      <div className="flex items-center justify-between px-20 bg-emerald-50 rounded-3xl shadow-md mb-28">
        <div className="w-1/2 pr-8">
          <img src={IcedCoffee} alt="Coffee" className="w-full h-auto max-w-md" />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Menu unggulan</h1>
          <h2 className="text-2xl font-semibold mb-2">Ice Coffee Latte</h2>
          <p className="text-gray-600 mb-4">
          Didirikan pada tahun 2023, Coffeess adalah startup kopi yang bercita-cita membuat kopi spesial terbaik untuk pelanggan. Dengan semangat inovatif dan komitmen untuk menyajikan pengalaman kopi yang tak terlupakan, Coffeess segera menjadi pusat perhatian di dunia kopi. Tim yang terdiri dari para ahli kopi, roaster berbakat, dan penggemar kopi sejati berkolaborasi untuk menciptakan campuran unik yang menggoda selera.
          </p>
        </div>
      </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutPage