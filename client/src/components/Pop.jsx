import React, { useState } from 'react';
import './TalentHuntPopup.css';

export default function TalentHuntPopup() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    phone: '',
    email: '',
    social: '',
    source: '',
    category: '',
  });

  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="popup-container">
        <form className="popup-form" onSubmit={handleSubmit} noValidate>
          <svg
            onClick={() => setIsVisible(false)}
            className="discard-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="button"
            aria-label="Close form"
            title="Close"
          >
            <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7a1 1 0 00-1.41 1.42L10.59 12l-4.9 4.89a1 1 0 101.41 1.42L12 13.41l4.89 4.9a1 1 0 001.42-1.41L13.41 12l4.9-4.89a1 1 0 000-1.4z" />
          </svg>

          <label className="popup-label" htmlFor="category">Talent Category</label>
          <select
            className="popup-input popup-select"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
          >

           <div className='option_box'>
             <option className='opt' value="">Select...</option>
            <option className='opt' value="Battle of Bands">Battle of Bands</option>
            <option className='opt' value="Battle of Rapper">Battle of Rapper</option>
            <option className='opt' value="Battle of Singer/Songwriter">Battle of Singer/Songwriter</option>
            <option className='opt' value="Battle of Musicians">Battle of Musicians</option>
           </div>
          </select>

          <label className="popup-label" htmlFor="name">Full Name</label>
          <input
            className="popup-input"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="popup-label" htmlFor="age">Age</label>
          <input
            className="popup-input"
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label className="popup-label" htmlFor="city">City</label>
          <input
            className="popup-input"
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label className="popup-label" htmlFor="phone">Phone Number</label>
          <input
            className="popup-input"
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label className="popup-label" htmlFor="email">Email</label>
          <input
            className="popup-input"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="popup-label" htmlFor="social">Social Media Link</label>
          <input
            className="popup-input"
            type="url"
            name="social"
            id="social"
            value={formData.social}
            onChange={handleChange}
          />

          <label className="popup-label" htmlFor="source">Where did you hear about us?</label>
          <input
            className="popup-input"
            type="text"
            name="source"
            id="source"
            value={formData.source}
            onChange={handleChange}
            required
          />

          <button className="popup-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
