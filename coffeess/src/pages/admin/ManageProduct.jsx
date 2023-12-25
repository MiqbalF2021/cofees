import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardDua from '../../components/card/CardDua';
import UpdateProductForm from './UpdateProductForm'; 
import NavAdmin from '../../components/NavAdmin';

const ManageProduct = ({ addToCart }) => {
  const [menuData, setMenuData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    // Fetch data menu saat komponen di-mount
    axios.get('https://backend-coffeess.vercel.app/menu')
      .then(response => setMenuData(response.data))
      .catch(error => console.error('Error fetching menu data:', error));
  }, []);

  const handleToggleEdit = (productId) => {
    setSelectedProductId(productId);
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    // Jika ada logika khusus yang perlu dijalankan setelah update, tambahkan di sini
    setIsEditing(false);
    setSelectedProductId(null); // Setelah update, reset ID produk yang akan diupdate
    // Refresh data menu setelah update (opsional)
    axios.get('https://backend-coffeess.vercel.app/menu')
      .then(response => setMenuData(response.data))
      .catch(error => console.error('Error fetching menu data:', error));
  };

  return (
    <div>
        <NavAdmin />
    <div>
      {isEditing && (
        <UpdateProductForm
          productId={selectedProductId}
          onUpdate={handleUpdate}
          onCancel={() => handleToggleEdit(null)}
        />
      )}

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {menuData.map(menuItem => (
            <CardDua
              key={menuItem._id}
              id={menuItem._id}
              title={menuItem.title}
              price={menuItem.price}
              imageUrl={menuItem.imageUrl}
              addToCart={addToCart}
              onEdit={handleToggleEdit}
            />
          ))}
        </div>

        <div className="mt-8">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => handleToggleEdit(null)}
          >
            {isEditing ? 'Cancel Edit' : 'Edit Menu'}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ManageProduct;
