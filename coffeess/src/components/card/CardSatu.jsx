import React from 'react'

const CardSatu = ({id, title, price, imageUrl, addToCart}) => {
  return (
    
    <div className="w-full max-w-sm bg-orange-50 rounded-lg shadow-md">
      <a>
          <h5 className="text-base sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white p-4">{title}</h5>
        </a>
      <a>
        <img className="p-8 rounded-t-lg" src={imageUrl} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold text-gray-900 dark:text-white md:text-lg lg:text-xl">Rp{price}</span>
          <button
            className="text-white bg-emerald-600  hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => addToCart({ id, title, price, imageUrl })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardSatu