import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', slot: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { Name: formData.name, Email: formData.email, Slot: formData.slot };

    try {
      await axios.post('https://api.sheetbest.com/sheets/3d137546-8a45-49d6-800d-f8440643fda8', data);
      alert('Registration successful!');
      setFormData({ name: '', email: '', slot: '' });
    } catch (err) {
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 20px',
  gap: '30px',
  backgroundColor: '#f8f8f8',
};

const columnStyle = {
  flex: '1',
  minWidth: '300px',
};

const imageContainerStyle = {
  flex: '2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyleone = {
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
};


  return (
    <>
      {/* Form Section */}
      <div style={{ margin: '100px', color: '#333', fontFamily: 'sans-serif', fontSize: '16px' }}>
        <h1 style={{ marginBottom: '25px', fontSize: '32px' }}>Register Your Slot</h1>
        <p style={{ marginBottom: '35px', maxWidth: '650px', fontSize: '17px', lineHeight: '1.6' }}>
          At Movement Studio, we’re passionate about creating a supportive and inspiring environment...
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: '450px' }}>
          {/* Name */}
          <div style={{ marginBottom: '20px' }}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', fontSize: '15px' }} />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', fontSize: '15px' }} />
          </div>

          {/* Slot */}
          <div style={{ marginBottom: '25px' }}>
            <label>Preferred Slot:</label>
            <input type="text" name="slot" value={formData.slot} onChange={handleChange} placeholder="e.g. Monday 5PM" required style={{ width: '100%', padding: '10px', fontSize: '15px' }} />
          </div>

          {/* Button */}
          <button type="submit" style={{ padding: '12px 24px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', borderRadius: '4px' }} disabled={loading}>
            {loading ? "Submitting..." : "Register Now"}
          </button>
        </form>
      </div>

      {/* Image Rows */}
      <div style={containerStyle}>
        <div style={columnStyle}></div>
        <div style={imageContainerStyle}>
          <img src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg" alt="shared" style={imageStyleone} />
        </div>
      </div>

      <div style={containerStyle}>
        <div style={columnStyle}></div>
        <div style={imageContainerStyle}>
          <img src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg" alt="shared" style={imageStyleone} />
        </div>
      </div>
    </>
  );
}

export default Register;
