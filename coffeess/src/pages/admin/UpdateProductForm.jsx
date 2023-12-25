import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProductForm = ({ productId, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    imageUrl: '',
  });

  useEffect(() => {
    // Fetch data produk yang akan diupdate saat komponen di-mount
    axios.get(`https://backend-coffeess.vercel.app/menu/${productId}`)
      .then(response => {
        const { title, price, imageUrl } = response.data;
        setFormData({ title, price, imageUrl });
      })
      .catch(error => console.error('Error fetching product data for update:', error));
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'price' ? Number(value) : value });
  };

  const handleUpdate = () => {
    // Kirim permintaan PUT untuk menyimpan pembaruan produk
    axios.put(`https://backend-coffeess.vercel.app/menu/${productId}`, formData)
      .then(response => {
        console.log(response.data);
        // Panggil callback onUpdate untuk memberi tahu parent bahwa produk telah diupdate
        onUpdate();
        // Tampilkan alert update sukses
      alert('Update successful!');
      window.location.reload();
      })
      .catch(error => {
        console.error('Error updating product data:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-cuy">
  <div className="bg-green-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-md sm:w-96 md:w-96 lg:w-96 xl:w-96">
    <h2 className="text-2xl font-bold mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8">Edit Product</h2>
    <form className="mb-2" onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
      <div className="mb-3">
        <label htmlFor="title" className="block text-gray-700 text-sm font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="block text-gray-700 text-sm font-semibold mb-1">
          Price
        </label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Price"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-semibold mb-1">
          Image URL
        </label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Image URL"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="w-1/2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Update Product
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-1/2 bg-gray-400 text-white p-2 rounded hover:bg-gray-500 focus:outline-none focus:ring focus:border-blue-300"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default UpdateProductForm;
