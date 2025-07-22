import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    date: '',
    time: '',
    request: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reservations', {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        alert('Table reserved successfully!');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="reservation-container">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="guests" type="number" placeholder="Guests" min="1" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <textarea name="request" placeholder="Special Requests" onChange={handleChange}></textarea>
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

export default ReservationForm;