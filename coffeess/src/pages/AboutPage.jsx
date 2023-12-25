
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import React,{ useEffect } from "react";

const AboutPage = () => {
  const navigate = useNavigate();

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
        <div className="container mx-auto font-cuy bg-white"> 
            {/* Section 1: Jumbotron with Image on the Right */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-8 px-4 md:px-20 lg:px-24 bg-orange-50 rounded-3xl shadow-md mb-20 p-4 md:p-10">
      <div className="w-full ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sejarah</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Awal mula Coffeess</h2>
        <p className="text-gray-600 mb-4">
        Didirikan pada tahun 2023, Coffeess muncul sebagai pionir dalam dunia kopi spesial. Dengan semangat inovatif yang melimpah dan komitmen yang kuat untuk menyajikan pengalaman kopi yang tak terlupakan, startup ini segera menjadi sorotan di industri kopi global.

Coffeess bukan sekadar tempat untuk menikmati secangkir kopi; ini adalah perjalanan rasa yang mengeksplorasi keunikan dan kompleksitas biji kopi dari seluruh penjuru dunia. Para pendiri, yang merangkul kecintaan mereka pada kopi, membentuk tim berbakat yang terdiri dari ahli kopi berpengalaman, roaster berbakat, dan penggemar kopi sejati.

Setiap anggota tim Coffeess memiliki peran khususnya sendiri, membawa pengetahuan mendalam tentang dunia kopi ke meja. Mereka menyadari bahwa kualitas kopi dimulai dari keberlanjutan rantai pasokan, dan oleh karena itu, mereka bekerja sama dengan petani kopi yang berkomitmen untuk praktik pertanian yang berkelanjutan dan adil.

Coffeess menghadirkan rangkaian kopi spesial yang eksklusif, menggabungkan biji-biji pilihan dari perkebunan kopi terbaik di berbagai belahan dunia. Tiap campuran diracik dengan cermat oleh roaster terbaik dalam tim, menghasilkan karya seni yang memikat dan memanjakan selera pelanggan.

Selain memanjakan lidah pelanggan, Coffeess juga menawarkan pengalaman kopi yang mendalam. Mereka mengadakan acara-acara spesial, seperti sesi cupping dan pertemuan dengan para petani kopi. Pelanggan tidak hanya dapat menikmati secangkir kopi berkualitas tinggi, tetapi juga dapat belajar lebih banyak tentang perjalanan biji kopi dari tanaman hingga cangkir.

Dengan visi untuk menjadi pusat perhatian di dunia kopi, Coffeess terus mengembangkan inovasi. Mereka telah meluncurkan aplikasi seluler yang memungkinkan pelanggan untuk memesan kopi favorit mereka secara mudah, sambil mendapatkan akses eksklusif ke informasi tentang biji kopi dan proses roasting.

Sejak berdiri, Coffeess berhasil menciptakan komunitas penggemar kopi yang setia, yang tidak hanya mencari minuman kopi berkualitas tinggi tetapi juga memahami dan menghargai perjalanan kopi dari kebun hingga cangkir. Dengan semangatnya yang terus berkobar, Coffeess berusaha menjadi pelopor dalam membawa kopi spesial ke tingkat yang lebih tinggi, menciptakan kenangan tak terlupakan bagi para pecinta kopi di seluruh dunia.
        </p>
      </div>
    </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutPage