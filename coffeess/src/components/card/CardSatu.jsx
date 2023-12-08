import React from 'react'

const CardSatu = () => {
  return (
    
    <div className="w-full max-w-sm bg-orange-50 rounded-lg shadow-md">
      <a href="#">
        <img className="p-8 rounded-t-lg" src="" alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Ice Black Coffee</h5>
        </a>
    
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp45000</span>
          <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambah ke Chart</a>
        </div>
      </div>
    </div>
  )
}

export default CardSatu