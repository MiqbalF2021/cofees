import React, { useState } from 'react';
import axios from 'axios';
import NavAdmin from '../../components/NavAdmin';

const AddProduct = () => {
    const [menuData, setMenuData] = useState({
        title: '',
        price: 0,
        imageUrl: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMenuData({ ...menuData, [name]: name === 'price' ? Number(value) : value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post('https://backend-coffeess.vercel.app/menu', menuData)
          .then(response => {
            console.log(response.data);
            alert('Add Product Berhasil');
            // Handle response jika diperlukan
          })
          .catch(error => {
            console.error('Error adding menu data:', error);
            // Handle error jika diperlukan
          });
      };
    
      return (
        <div>
            <NavAdmin />
            <div className="min-h-screen flex items-center justify-center font-cuy">
  <div className="bg-green-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-md sm:w-96 md:w-96 lg:w-96 xl:w-96">
    <h2 className="text-2xl font-bold mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8">Add Product</h2>
    <form className="mb-2" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="block text-gray-700 text-sm font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={menuData.title}
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
          value={menuData.price}
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
          value={menuData.imageUrl}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Image URL"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-900 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Menu
      </button>
    </form>
  </div>
</div>

        </div>
        
      );
    };

export default AddProduct