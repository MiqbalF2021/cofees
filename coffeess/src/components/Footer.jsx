import React from 'react'

const Footer = () => {
  return (
    <footer className=" grid justify-center  bg-green-700 text-white py-4  font-medium text-sm font-cuy">
          <div className='flex gap-5 px-20 mb-3'>
            <div>
              <p >Hubungi Kami:</p>
            </div>
            <div>
              <p >085162890411</p>
            </div> 
            <div>
            <p >miqbalfauzi000@gmail.com</p>
            </div>
          </div> 
          <div className='text-center text-xs text-green-400'>
            &copy; 2023 Muhamad Iqbal Fauzi
          </div>
      </footer>
  )
}

export default Footer