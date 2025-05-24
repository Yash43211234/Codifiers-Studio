import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const timestamp = new Date().toLocaleString();

    const data = {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Slot: formData.slot,
      DAW: formData.daw,
      Experience: formData.experience,
      Timestamp: timestamp,
    };

    try {
      await axios.post('https://api.sheetbest.com/sheets/dcdeb7ed-e27e-4f82-9880-0758c092edb4', data);
      alert('✅ Registration successful!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        slot: '',
        daw: '',
        experience: '',
      });
    } catch (err) {
      alert('❌ Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // Responsive styles
  const containerStyle = {
    background: 'linear-gradient(135deg, #141e30, #243b55)',
    minHeight: '100vh',
    padding: isMobile ? '40px 10px' : '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    fontFamily: "'Segoe UI', sans-serif",
  };

  const formWrapperStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: isMobile ? '30px 20px' : '40px',
    width: '100%',
    maxWidth: isMobile ? '100%' : '700px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.37)',
    backdropFilter: 'blur(15px)',
  };

  const inputStyle = {
    width: '95%',
    padding: '16px 10px',
    fontSize: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.1)',
    color: 'black',
    backdropFilter: 'blur(10px)',
    marginBottom: '20px',
    transition: '0.3s',
  };

  const imagesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    gap: '20px',
    flexWrap: 'wrap',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'stretch',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: isMobile ? '90vw' : '340px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    marginBottom: isMobile ? '20px' : '0',
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <h1 style={{
          fontSize: isMobile ? '28px' : '36px',
          fontWeight: 'bold',
          marginBottom: '10px',
          textAlign: 'center',
          color: '#f9fafb',
        }}>
          🎧 Book Your Studio Session
        </h1>
        <p style={{
          fontSize: isMobile ? '16px' : '18px',
          textAlign: 'center',
          marginBottom: '30px',
          color: '#cbd5e1',
        }}>
          Unlock your sound. Join the most immersive music production experience.
        </p>

        <form onSubmit={handleSubmit}>
          {[
            { name: 'name', type: 'text', label: 'Full Name' },
            { name: 'email', type: 'email', label: 'Email Address' },
            { name: 'phone', type: 'tel', label: 'Phone Number' },
            { name: 'slot', type: 'text', label: 'Preferred Slot (e.g. Mon 5PM)' },
          ].map(({ name, type, label }) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={label}
              value={formData[name]}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          ))}

          <select name="daw" value={formData.daw} onChange={handleChange} required style={inputStyle}>
            <option value="">-- Select DAW --</option>
            <option value="FL Studio">FL Studio</option>
            <option value="Ableton Live">Ableton Live</option>
            <option value="Logic Pro">Logic Pro</option>
            <option value="Pro Tools">Pro Tools</option>
            <option value="Other">Other</option>
          </select>

          <select name="experience" className="options" value={formData.experience} onChange={handleChange} required style={inputStyle}>
            <option value="">-- Experience Level --</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(to right, #ff512f, #dd2476)',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            {loading ? 'Submitting...' : '🎶 Register Now'}
          </button>
        </form>
      </div>

      <div style={imagesContainerStyle}>
        <img
          src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
          alt="Studio Vibe"
          style={imageStyle}
        />
        <img
          src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
          alt="Studio Jam"
          style={imageStyle}
        />
      </div>
<style>
{
  `
  .options {
  width: 10%;
  padding: 14px 16px;
  font-size: 16px;
  border-radius: 10px;
 
  color: #fff;
  backdrop-filter: blur(10px);
  appearance: none;       /* Remove default arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.options:hover,
.options:focus {
  border-color: #ff4081;
  outline: none;
}

  `
}

</style>

    </div>
  );
}

export default Register;
