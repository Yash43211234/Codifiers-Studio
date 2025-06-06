import React, { useState } from 'react';

const availabilityOptions = ['Weekdays', 'Weekends', 'Evenings'];
const additionalServicesOptions = ['Editing', 'Mixing', 'Mastering'];

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '8px 0',
  boxSizing: 'border-box',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const labelStyle = {
  display: 'block',
  marginTop: '10px',
  fontWeight: 'bold',
};

const checkboxLabelStyle = {
  display: 'inline-block',
  marginRight: '15px',
  fontSize: '14px',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '12px 20px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

const formStyle = {
  maxWidth: '500px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const ProAudioRecordingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    availability: [],
    additionalServices: [],
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvailabilityChange = (e) => {
    const value = e.target.value;
    const updated = formData.availability.includes(value)
      ? formData.availability.filter((item) => item !== value)
      : [...formData.availability, value];
    setFormData({ ...formData, availability: updated });
  };

  const handleAdditionalServicesChange = (e) => {
    const value = e.target.value;
    const updated = formData.additionalServices.includes(value)
      ? formData.additionalServices.filter((item) => item !== value)
      : [...formData.additionalServices, value];
    setFormData({ ...formData, additionalServices: updated });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = { ...formData };

  try {
    const response = await fetch('https://thechordifiers.studio/pro-audio-form/save-form.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to submit');

    const result = await response.json();
    alert(result.message || 'Form submitted successfully!');

    // Reset form after successful submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      availability: [],
      additionalServices: [],
      budget: '',
      message: '',
    });
  } catch (err) {
    console.error(err);
    alert('Error submitting form.');
  }
};


  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <label style={labelStyle}>Full Name</label>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <label style={labelStyle}>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <label style={labelStyle}>Phone</label>
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <label style={labelStyle}>Availability</label>
      {availabilityOptions.map((option, index) => (
        <label key={index} style={checkboxLabelStyle}>
          <input
            type="checkbox"
            value={option}
            checked={formData.availability.includes(option)}
            onChange={handleAvailabilityChange}
          />{' '}
          {option}
        </label>
      ))}

      <label style={labelStyle}>Additional Services</label>
      {additionalServicesOptions.map((option, index) => (
        <label key={index} style={checkboxLabelStyle}>
          <input
            type="checkbox"
            value={option}
            checked={formData.additionalServices.includes(option)}
            onChange={handleAdditionalServicesChange}
          />{' '}
          {option}
        </label>
      ))}

      <label style={labelStyle}>Budget</label>
      <input
        type="text"
        name="budget"
        placeholder="Your Budget"
        value={formData.budget}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle}>Message</label>
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        style={{ ...inputStyle, height: '80px', resize: 'vertical' }}
      />

      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default ProAudioRecordingForm;
