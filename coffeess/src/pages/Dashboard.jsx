import React from 'react'

const Dashboard = () => {
  return (
    <div className="overflow-x-auto m-10">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">No</th>
        <th className="py-2 px-4 border-b">Menu Pesanan</th>
        <th className="py-2 px-4 border-b">Jumlah</th>
        <th className="py-2 px-4 border-b">Alamat</th>
        <th className="py-2 px-4 border-b">Total Harga</th>
        <th className="py-2 px-4 border-b">Hapus</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b">Coffee Latte</td>
        <td className="py-2 px-4 border-b">2</td>
        <td className="py-2 px-4 border-b">Jl. ABC No. 123</td>
        <td className="py-2 px-4 border-b">Rp80,000</td>
        <td className="py-2 px-4 border-b">
          <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded">Hapus</button>
        </td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>
  )
}

export default Dashboard