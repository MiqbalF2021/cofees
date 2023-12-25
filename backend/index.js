const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const MenuModel = require('./models/Menu');
const TransaksiModel = require('./models/Transaksi'); // Tambahkan ini
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors());


//Register User
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json("Already registered")
      }
      else {
        UserModel.create(req.body)
          .then(users => res.json(users))
          .catch(err => res.json(err))
      }
    })

})

//Login User
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        // If user found then these 2 cases
        if (user.password === password) {
          res.json("Success");
        }
        else {
          res.json("Wrong password");
        }
      }
      // If user not found then 
      else {
        res.json("No records found! ");
      }
    })
})

//get Product
app.get('/menu', (req, res) => {
  MenuModel.find()
    .then(menuItems => res.json(menuItems))
    .catch(err => res.json(err));
});

app.post('/menu', async (req, res) => {
  try {
    // Extract menu data from the request body
    const { title, price, imageUrl } = req.body;

    // Validate the data (you may add more validation as needed)
    if (!title || isNaN(price) || price < 0) {
      return res.status(400).json({ error: 'Invalid data provided' });
    }

    // Create a new menu item
    const newMenu = new MenuModel({
      title,
      price,
      imageUrl,
    });

    // Save the menu item to the database
    const savedMenu = await newMenu.save();

    // Respond with the saved menu item
    res.status(201).json(savedMenu);
  } catch (error) {
    // Handle errors and respond with an appropriate message
    console.error('Error adding menu item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Menu
app.put('/menu/:id', async (req, res) => {
  try {
    const { title, price, imageUrl } = req.body;

    // Validasi data (sesuaikan dengan kebutuhan Anda)
    if (!title || isNaN(price) || price < 0) {
      return res.status(400).json({ error: 'Invalid data provided' });
    }

    // Cari dan update menu berdasarkan ID
    const updatedMenu = await MenuModel.findByIdAndUpdate(
      req.params.id,
      { title, price, imageUrl },
      { new: true } // Return menu yang sudah diupdate
    );

    // Respon dengan menu yang sudah diupdate
    res.json(updatedMenu);
  } catch (error) {
    console.error('Error updating menu:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Pesan Sesuatu
app.post('/pesanan', async (req, res) => {
  try {
    const { nama, kota, alamat, items } = req.body;

    // Simpan data pesanan ke database
    const transaksi = await TransaksiModel.create({
      nama,
      kota,
      alamat,
      items,
    });

    console.log('Pesanan diterima:', transaksi);

    // Kirim respons ke frontend
    res.json({ message: 'Pesanan berhasil diterima' });
  } catch (error) {
    console.error('Error handling pesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//menampilkan pesanan
app.get('/transaksi', async (req, res) => {
  try {
    // Retrieve all transactions from the database
    const transactions = await TransaksiModel.find().exec();

    // Send the transactions as a response
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//Konfirmasi pesanan
app.delete('/transaksi/:id', async (req, res) => {
  try {
    const deletedTransaksi = await TransaksiModel.findByIdAndDelete(req.params.id);
    if (!deletedTransaksi) {
      return res.status(404).json({ message: 'Transaksi not found' });
    }
    res.json({ message: 'Transaksi successfully deleted' });
  } catch (error) {
    console.error('Error deleting transaksi:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


const PORT = process.env.PORT || 3001;
const URI = process.env.DB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Failed", err.message));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});