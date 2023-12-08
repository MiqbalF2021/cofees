import React from 'react'
import Nav from '../components/Nav'
import CardSatu from '../components/card/CardSatu'
import Footer from '../components/Footer'


const MenuPage = () => {
  return (
    <div>
        <Nav />
        <div className='pl-10 font-medium text-xl font-cuy'>Silahkan pilih Menu Favorit anda!</div>
        <div class="font-cuy p-8 gap-6 items-center justify-center grid mb-8  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800">
            <CardSatu />
            <CardSatu />
            <CardSatu />
            <CardSatu />
            <CardSatu />
            <CardSatu />
            <CardSatu />
            <CardSatu />
            <CardSatu />
        </div>
        <Footer />
    </div>
    
    
  )
}

export default MenuPage