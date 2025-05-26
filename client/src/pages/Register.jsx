import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function One11ShowRegistrationForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '+91',
    stageName: '',
    email: '',
    category: '',
    performanceType: '',
    demoLink: '',
    photoLink: '',
    bio: '',
    signature: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const timestamp = new Date().toLocaleString();

    const payload = {
      FullName: formData.fullName,
      ContactNumber: formData.contactNumber,
      StageName: formData.stageName,
      Email: formData.email,
      Category: formData.category,
      PerformanceType: formData.performanceType,
      DemoLink: formData.demoLink,
      PhotoLink: formData.photoLink,
      Bio: formData.bio,
      Signature: formData.signature,
      Timestamp: timestamp,
    };

    try {
      await axios.post(
        'https://api.sheetbest.com/sheets/7f7650da-145c-4dd6-8b79-9d0cbdbb12b3',
        payload
      );
      navigate('/thank-you');
    } catch (err) {
      alert('❌ Submission failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formStyle = {
    backgroundColor: '#ff4b4b',
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    color: '#000',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const containerStyle = {
    maxWidth: '600px',
    width: '100%',
  };

  const fieldStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const labelStyle = {
    flex: '0 0 180px',
    fontWeight: 'bold',
    fontSize: '18px',
  };

  const inputStyle = {
    flex: 1,
    padding: '10px 15px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
  };

  const selectStyle = {
    ...inputStyle,
    backgroundColor: '#fff',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '60px',
    resize: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 25px',
    border: 'none',
    borderRadius: '20px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
    float: 'right',
  };

  return (
    <div style={formStyle}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold', marginBottom: '30px' }}>
          The One11 Show Registration
        </h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name*', name: 'fullName', type: 'text' },
            { label: 'Contact Number*', name: 'contactNumber', type: 'tel' },
            { label: 'Stage Name / Band Name*', name: 'stageName', type: 'text' },
            { label: 'Email Address*', name: 'email', type: 'email' },
            { label: 'Type Your Name to Sign*', name: 'signature', type: 'text' },
          ].map(({ label, name, type }) => (
            <div key={name} style={fieldStyle}>
              <label htmlFor={name} style={labelStyle}>{label}</label>
              <input
                type={type}
                name={name}
                id={name}
                value={formData[name]}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
          ))}

          {/* Category */}
          <div style={fieldStyle}>
            <label htmlFor="category" style={labelStyle}>Choose Category*</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              required
              style={selectStyle}
            >
              <option value="">-- Select --</option>
              <option value="Battle of Bands">Battle of Bands</option>
              <option value="Battle of Singer/Songwriter">Battle of Singer/Songwriter</option>
              <option value="Battle of Rappers">Battle of Rappers</option>
              <option value="Battle of DJs">Battle of DJs</option>
              <option value="Battle of Musicians (Instrument Battle)">Battle of Musicians (Instrument Battle)</option>
            </select>
          </div>

          {/* Performance Type */}
          <div style={fieldStyle}>
            <label htmlFor="performanceType" style={labelStyle}>Solo or Group?*</label>
            <select
              name="performanceType"
              id="performanceType"
              value={formData.performanceType}
              onChange={handleChange}
              required
              style={selectStyle}
            >
              <option value="">-- Select --</option>
              <option value="Solo">Solo</option>
              <option value="Duo">Duo</option>
              <option value="Band/Group">Band/Group</option>
            </select>
          </div>

          {/* Textareas */}
          {[
            { label: 'Share Your Demo (Google drive link)*', name: 'demoLink' },
            { label: 'Upload Your Photo/Logo (Google drive link)*', name: 'photoLink' },
            { label: 'Short Artist/Band Bio*', name: 'bio' },
          ].map(({ label, name }) => (
            <div key={name} style={fieldStyle}>
              <label htmlFor={name} style={labelStyle}>{label}</label>
              <textarea
                name={name}
                id={name}
                value={formData[name]}
                onChange={handleChange}
                style={textareaStyle}
                required
              />
            </div>
          ))}

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default One11ShowRegistrationForm;
