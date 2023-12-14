const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  kota: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  items: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu', // Mengacu pada model Menu
        required: true,
      },
        title: {
            type: String,
            ref: 'Menu', // Mengacu pada model Menu
            required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Transaksi = mongoose.model('Transaksi', transaksiSchema);

module.exports = Transaksi;