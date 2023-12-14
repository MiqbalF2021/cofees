import Nav from '../components/Nav'
import CardSatu from '../components/card/CardSatu'
import Footer from '../components/Footer'
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MenuPage = ({ addToCart }) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState([]);

  // Fetch menu data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3001/menu')
      .then(response => setMenuData(response.data))
      .catch(error => console.error('Error fetching menu data:', error));
  }, []);

  // Check user login status when the component mounts
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      // Navigate back to the login page if the user is not logged in
      navigate('/login');
    }
  }, [navigate]);

  const handleAddToCart = (item) => {
    addToCart(item);

    // Update local storage after adding an item to the cart
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
  };


  return (
    <div>
        <Nav />
        <div className='bg-white'>
        <div className='pl-10 font-medium text-xl font-cuy'>Silahkan pilih Menu Favorit anda!</div>
        <div className="font-cuy p-8 gap-6 items-center justify-center grid mb-8  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800 sm:grid-cols-2">
        {menuData.slice(0, 9).map(menuItem => (
        <CardSatu 
          key={menuItem._id}
          id={menuItem._id}
          title={menuItem.title}
          price={menuItem.price}
          imageUrl={menuItem.imageUrl}
          addToCart={addToCart}
        />
))}
        </div>
        </div>
        
        
        <Footer />
    </div>
    
    
  )
}

export default MenuPage