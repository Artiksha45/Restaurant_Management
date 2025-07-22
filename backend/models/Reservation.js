const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  guests: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  request: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', ReservationSchema);
