import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const One11ShowRegistrationForm = () => {
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

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = 'Required';
      }
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitMessage('Submitting...');

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
      Timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(
        'https://api.sheetbest.com/sheets/7f7650da-145c-4dd6-8b79-9d0cbdbb12b3',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          mode: 'cors',
        }
      );

      if (response.ok) {
        setSubmitMessage('Form submitted successfully!');
        setFormData({
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
        navigate('/submission-successfully');
      } else {
        const errorText = await response.text();
        console.error('Submission failed:', errorText);
        setSubmitMessage('Submission failed. Try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Submission error. Try again later.');
    }
  };

  // Styles
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

  const errorStyle = {
    color: 'white',
    fontSize: '12px',
    marginLeft: '180px',
    marginTop: '-10px',
    marginBottom: '10px',
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
          The One 11 Show Registration
        </h2>
        {submitMessage && <p style={{ color: 'white', textAlign: 'center' }}>{submitMessage}</p>}
        <form onSubmit={handleSubmit}>
          {[{ label: 'Full Name*', name: 'fullName', type: 'text' },
            { label: 'Contact Number*', name: 'contactNumber', type: 'tel' },
            { label: 'Stage Name / Band Name*', name: 'stageName', type: 'text' },
            { label: 'Email Address*', name: 'email', type: 'email' },
            { label: 'Type Your Name to Sign*', name: 'signature', type: 'text' }
          ].map(({ label, name, type }) => (
            <div key={name}>
              <div style={fieldStyle}>
                <label htmlFor={name} style={labelStyle}>{label}</label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              {errors[name] && <div style={errorStyle}>{errors[name]}</div>}
            </div>
          ))}

          {/* Category */}
          <div>
            <div style={fieldStyle}>
              <label htmlFor="category" style={labelStyle}>Choose Category*</label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
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
            {errors.category && <div style={errorStyle}>{errors.category}</div>}
          </div>

          {/* Performance Type */}
          <div>
            <div style={fieldStyle}>
              <label htmlFor="performanceType" style={labelStyle}>Solo or Group?*</label>
              <select
                name="performanceType"
                id="performanceType"
                value={formData.performanceType}
                onChange={handleChange}
                style={selectStyle}
              >
                <option value="">-- Select --</option>
                <option value="Solo">Solo</option>
                <option value="Duo">Duo</option>
                <option value="Band/Group">Band/Group</option>
              </select>
            </div>
            {errors.performanceType && <div style={errorStyle}>{errors.performanceType}</div>}
          </div>

          {/* Textareas */}
          {[{ label: 'Share Your Demo (Google drive link)*', name: 'demoLink' },
            { label: 'Upload Your Photo/Logo (Google drive link)*', name: 'photoLink' },
            { label: 'Short Artist/Band Bio*', name: 'bio' }
          ].map(({ label, name }) => (
            <div key={name}>
              <div style={fieldStyle}>
                <label htmlFor={name} style={labelStyle}>{label}</label>
                <textarea
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  style={textareaStyle}
                />
              </div>
              {errors[name] && <div style={errorStyle}>{errors[name]}</div>}
            </div>
          ))}

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default One11ShowRegistrationForm;
