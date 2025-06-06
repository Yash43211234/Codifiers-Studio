import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const DiplomaCourseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: '',
    mode: '',
    goals: '',
    experience: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData();
  for (let key in formData) {
    form.append(key, formData[key]);
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwpalmWdYsnY5lD_gvqVjA70w2IWctyecg6tSMept5u0QjHY1pNb2jp12ZucNu9HNoz5Q/exec',
      {
        method: 'POST',
        body: form
        // DO NOT SET headers manually
      }
    );

    const result = await response.text();
    console.log(result);
    setMessage('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      courses: '',
      mode: '',
      goals: '',
      experience: ''
    });
  } catch (error) {
    console.error('Error:', error);
    setMessage('Submission failed.');
  }
};


  return (
    <form onSubmit={handleSubmit}>
      {['name', 'email', 'phone', 'courses', 'mode', 'goals', 'experience'].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}

export default DiplomaCourseForm;
