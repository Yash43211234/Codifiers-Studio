import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    slot: '',
    daw: '',
    experience: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const timestamp = new Date().toLocaleString(); // You can change to ISO or formatted if needed

  const data = {
    Name: formData.name,
    Email: formData.email,
    Phone: formData.phone,
    Slot: formData.slot,
    DAW: formData.daw,
    Experience: formData.experience,
    Timestamp: timestamp, // 👈 Make sure your Sheet has this column
  };

  try {
    await axios.post('https://api.sheetbest.com/sheets/dcdeb7ed-e27e-4f82-9880-0758c092edb4', data);
    alert('Registration successful!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      slot: '',
      daw: '',
      experience: '',
    });
  } catch (err) {
    alert('Something went wrong.');
  } finally {
    setLoading(false);
  }
};

  const labelStyle = { display: 'block', fontSize: '18px', marginBottom: '10px', color: '#444' };
  const inputStyle = {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
  };

  return (
    <>
      <div style={{
        margin: '80px auto',
        maxWidth: '800px',
        padding: '40px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #fef6e4, #f9d5e5)',
        color: '#222',
        fontFamily: 'sans-serif',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ marginBottom: '20px', fontSize: '38px', fontWeight: 'bold', color: '#222' }}>
          🎶 Register Your Slot
        </h1>
        <p style={{ marginBottom: '40px', fontSize: '20px', lineHeight: '1.6' }}>
          Ready to begin your journey into music production? Secure your seat in our hands-on, industry-driven training program.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Full Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Email Address:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Phone Number:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Preferred Slot:</label>
            <input type="text" name="slot" value={formData.slot} onChange={handleChange} placeholder="e.g. Monday 5 PM" required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Preferred DAW (Digital Audio Workstation):</label>
            <select name="daw" value={formData.daw} onChange={handleChange} required style={inputStyle}>
              <option value="">-- Select DAW --</option>
              <option value="FL Studio">FL Studio</option>
              <option value="Ableton Live">Ableton Live</option>
              <option value="Logic Pro">Logic Pro</option>
              <option value="Pro Tools">Pro Tools</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={labelStyle}>Experience Level:</label>
            <select name="experience" value={formData.experience} onChange={handleChange} required style={inputStyle}>
              <option value="">-- Select Level --</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '16px 32px',
              background: '#ff4081',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            {loading ? "Submitting..." : "Register Now"}
          </button>
        </form>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 20px',
        background: '#fff5f8',
        gap: '40px',
        flexWrap: 'wrap',
      }}>
        <img
          src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
          alt="Music Production Session"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '16px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          }}
        />
        <img
          src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
          alt="Live Studio Training"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '16px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          }}
        />
      </div>
    </>
  );
}

export default Register;
