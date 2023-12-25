import React, { useState } from 'react';
import UpdateProductForm from '../../pages/admin/UpdateProductForm';

const CardDua = ({ id, title, price, imageUrl }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

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
          
        </div>
        <div>
          {isEditing ? (
            <UpdateProductForm
              productId={id}
              onUpdate={() => {
                setIsEditing(false);
              }}
              onCancel={handleCancelEdit}
            />
          ) : (
            <button
              onClick={handleEdit}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDua;
