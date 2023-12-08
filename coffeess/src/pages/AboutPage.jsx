import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import IcedCoffee from '../img/IcedCoffee.png'
import { Button } from 'flowbite-react';

const AboutPage = () => {
  return (
    <div>
        <Nav />
        <div className="container mx-auto font-cuy"> 
            {/* Section 1: Jumbotron with Image on the Right */}
      <div className="flex items-center justify-between px-20">
        <div className="w-1/2 pr-8">
          <img src={IcedCoffee} alt="Coffee" className="w-full h-auto max-w-md" />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Menu unggulan</h1>
          <h2 className="text-2xl font-semibold mb-2">Ice Coffee Latte</h2>
          <p className="text-gray-600 mb-4">
            Deskripsi singkat tentang Ice Coffee Latte. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button color="success">Pesan Sekarang</Button>
        </div>
      </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutPage