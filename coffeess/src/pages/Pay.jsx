
import { Label, Textarea, Select } from 'flowbite-react';
import {Link, useNavigate} from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import { calculateTotalPrice } from './Cart';

const Pay = ({  cartItems }) => {
  const [nama, setNama] = useState('');
  const [kota, setKota] = useState('');
  const [alamat, setAlamat] = useState('');
  const [title, setTittle] = useState({});
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 1; // Set default quantity if not available
    });
    setQuantities(initialQuantities);
    setTotalPrice(calculateTotalPrice(cartItems, initialQuantities));
  }, [cartItems]);

  const handleBayar = async () => {
    // Membuat payload yang berisi data yang akan dikirim ke backend
    const payload = {
      nama,
      kota,
      alamat,
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
      })),
    };

    try {
      // Mengirim data ke backend menggunakan HTTP POST request
      const response = await axios.post('https://backend-coffeess.vercel.app/pesanan', payload);

      // Menampilkan respons dari backend (response.data) di console
      console.log(response.data);
      alert('Pesanan berhasil! Mohon tunggu konfirmasi dari kami.');
      navigate('/home');

      // Redirect ke halaman lain atau lakukan sesuatu setelah berhasil melakukan pembayaran
      // Anda dapat menggunakan useHistory atau Link untuk mengatur navigasi
    } catch (error) {
      // Menampilkan pesan error jika terjadi kesalahan
      console.error('Error making payment:', error);
    }
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      // Navigasi kembali ke halaman login jika pengguna tidak login
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      <Nav />
      <div className='font-cuy mb-40 mx-10'>
  <h1 className='text-3xl font-extrabold mt-2 text-center'>Pembayaran</h1>
  <div className=' gap-4 mx-auto mt-5 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl'>
    <div className="max-w-md mx-auto">
    <div className="max-w-md mx-auto">
      <div className="mb-2 block">
        <Label htmlFor="nama" value="Nama" className='font-bold'/>
      </div>
      <Textarea id="nama"
              placeholder="Masukan Nama anda"
              required
              rows={1}
              value={nama}
              onChange={(e) => setNama(e.target.value)} />
    </div>
      <div className="mb-2 block">
        <Label htmlFor="kota" value="Pilih Daerah" className='font-bold'/>
      </div>
      <Select id="kota"
            required
            value={kota}
            onChange={(e) => setKota(e.target.value)}>
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
        <Label htmlFor="alamat" value="Alamat" className='font-bold'/>
      </div>
      <Textarea id="alamat"
            placeholder="Masukan Alamat lengkap disini"
            required
            rows={4}
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)} />
    </div>
    <div className="max-w-md mx-auto">
      <div className="mb-2 block">
        <Label htmlFor="payMethod" value="Metode Pembayaran" className='font-bold' />
      </div>
      <Select id="payMethod" required>
        <option>COD</option>
      </Select>
    </div>
    {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mt-4 ">
              <div>
                <h2 className="text-md sm:text-lg font-bold">{item.title}</h2>
                <p>Jumlah: {quantities[item.id]}</p>
              </div>
              <p className="text-md sm:text-lg">Rp{item.price * quantities[item.id]}</p>
            </div>
          ))}
          <div className='text-xl font-semibold mt-4 text-right '>
            Total Harga: Rp{totalPrice}
          </div>
  </div>
  <div className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 bg-orange-500 text-white px-4 sm:px-8 py-3 sm:py-5 rounded-2xl font-bold shadow-xl hover:bg-orange-600'>
    <Link to="#" onClick={handleBayar}>
      Pesan dan Bayar
    </Link>
  </div>
  
</div>
      <Footer />
    </div>

  )
}

export default Pay