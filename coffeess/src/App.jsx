  // src/App.jsx
  import React, { useState } from 'react';
  import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
  import LandingPage from './pages/LandingPage';
  import HomePage from './pages/HomePage';
  import AboutPage from './pages/AboutPage';
  import MenuPage from './pages/MenuPage';
  import Cart from './pages/Cart';
  import Pay from './pages/Pay';
  import Login from './pages/Login';
  import Register from './pages/Register';
  import AddProduct from './pages/admin/AddProduct';
  import TransaksiAdminPage from './pages/admin/Transaksi';

  function App() {
    const [cartItems, setCartItems] = useState(() => {
      // Read cart items from local storage when the component mounts
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
  
    const [totalPrice, setTotalPrice] = useState(0);
  
    const addToCart = (item, quantityChange) => {
      // Cek apakah item sudah ada di keranjang
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
      alert('Success add to cart.');
  
      if (existingItem) {
        // Jika item sudah ada, tambahkan ke jumlah yang sudah ada
        existingItem.quantity += quantityChange;
        setCartItems([...cartItems]);
      } else {
        // Jika item belum ada, tambahkan dengan jumlah yang diinginkan
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
  
      // Hitung ulang total harga setiap kali ada perubahan di keranjang
      const newTotalPrice = calculateTotalPrice([...cartItems, { ...item, quantity: quantityChange }]);
      setTotalPrice(newTotalPrice);
  
      // Update local storage after adding an item to the cart
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
    };
    
    // Fungsi hitung total harga
    const calculateTotalPrice = (items) => {
      return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} totalPrice={totalPrice}/>} />
          <Route path="/pay" element={<Pay totalPrice={totalPrice} cartItems={cartItems}/>} />
          <Route path="/transaksi" element={<TransaksiAdminPage />} />
          <Route path="/product" element={<AddProduct />} />
        </Routes>
      </Router>
    );
  }
  export default App;
