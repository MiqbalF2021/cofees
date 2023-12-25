// Import necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavAdmin from '../../components/NavAdmin';

const TransaksiAdminPage = () => {
  const [transaksiList, setTransaksiList] = useState([]);

  useEffect(() => {
    fetchTransaksi(); // Muat transaksi saat komponen dipasang
  }, []);

  const fetchTransaksi = () => {
    // Fetch transactions from the server
    axios.get('https://backend-coffeess.vercel.app/transaksi')
      .then(response => setTransaksiList(response.data))
      .catch(error => console.error('Error fetching transaksi data:', error));
  };

  const handleKonfirmasi = async (transaksiId) => {
    try {
      // Kirim permintaan penghapusan pesanan
      await axios.delete(`https://backend-coffeess.vercel.app/transaksi/${transaksiId}`);
      // Muat ulang daftar transaksi setelah penghapusan
      fetchTransaksi();
    } catch (error) {
      console.error('Error confirming transaksi:', error);
    }
  };
  return (
    <div>
      <NavAdmin />
      <div className="min-h-screen font-cuy">
  <div className="bg-green-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-md w-full overflow-x-auto">
    <table className="w-full border-collapse border border-green-600">
      <thead>
        <tr className="bg-green-100">
          <th className="p-3 border-b">Nama</th>
          <th className="p-3 border-b">Kota</th>
          <th className="p-3 border-b">Alamat</th>
          <th className="p-3 border-b">Items</th>
          <th className="p-3 border-b">Timestamp</th>
          <th className="p-3 border-b">Konfirmasi</th>
        </tr>
      </thead>
      <tbody>
        {transaksiList.map((transaksi) => (
          <tr key={transaksi._id} className="border-b">
            <td className="p-3">{transaksi.nama}</td>
            <td className="p-3">{transaksi.kota}</td>
            <td className="p-3">{transaksi.alamat}</td>
            <td className="p-3">
              <ul>
                {transaksi.items.map((item) => (
                  <li key={item.id}>
                    {item.quantity} x {item.title}
                  </li>
                ))}
              </ul>
            </td>
            <td className="p-3">{transaksi.timestamp}</td>
            <td className="p-3">
              <button
                className="bg-emerald-600 text-gray-50 rounded-md hover:bg-green-700 px-4 py-2"
                onClick={() => handleKonfirmasi(transaksi._id)}
              >
                Konfirmasi
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
};

export default TransaksiAdminPage;
