import React from 'react'
import { Label, Textarea, Select } from 'flowbite-react';
import {Link} from 'react-router-dom'

const Pay = () => {
  return (
    <div className='font-cuy '>
  <h1 className='text-3xl font-extrabold mt-2 text-center'>Pembayaran</h1>
  <div className=' gap-4 mx-auto mt-5 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl'>
    <div className="max-w-md mx-auto">
      <div className="mb-2 block">
        <Label htmlFor="kota" value="Pilih Daerah" className='font-bold'/>
      </div>
      <Select id="kota" required>
        <option>Cipadung</option>
        <option>Cibiru</option>
        <option>Cilengkrang</option>
        <option>Cibiru Hilir</option>
        <option>Panyilekan</option>
        <option>Manisi</option>
        <option>Cinunuk</option>
        <option>Cimekar</option>
        <option>Cilenyi</option>
      </Select>
    </div>
    <div className="max-w-md mx-auto">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Alamat" className='font-bold'/>
      </div>
      <Textarea id="alamat" placeholder="Masukan Alamat lengkap disini" required rows={4} />
    </div>
    <div className="max-w-md mx-auto">
      <div className="mb-2 block">
        <Label htmlFor="payMethod" value="Metode Pembayaran" className='font-bold' />
      </div>
      <Select id="payMethod" required>
        <option>COD</option>
      </Select>
    </div>
  </div>
  <div className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 bg-orange-500 text-white px-4 sm:px-8 py-3 sm:py-5 rounded-2xl font-bold shadow-xl hover:bg-orange-600'>
    <Link to="/pay">
      Bayar
    </Link>
  </div>
</div>

  )
}

export default Pay