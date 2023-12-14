const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  title: {
    type : String,
    required: true,
  },
  price: Number,
  imageUrl: String,
});

const MenuModel = mongoose.model('Menu', menuSchema);

module.exports = MenuModel;
