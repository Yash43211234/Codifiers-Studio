import React, { useState, useEffect } from 'react';

const QueryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.query.trim()) newErrors.query = 'Query is required';
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
    setSubmitMessage('Sending...');

    const payload = {
      Name: formData.name,
      Email: formData.email,
      Query: formData.query,
      Timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(
        'https://api.sheetbest.com/sheets/a5409eff-aa93-4dde-bf14-452a17f2ddf2',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSubmitMessage('Query submitted successfully!');
        setFormData({ name: '', email: '', query: '' });
      } else {
        setSubmitMessage('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Try again later.');
    }
  };

  // 🧠 useEffect to clear the success/error message after 5 seconds
  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer); // Clean up timer
    }
  }, [submitMessage]);

  // Styles
  const containerStyle = {
    backgroundColor: '#fff700',
    minHeight: '100vh',
    padding: '40px 20px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formWrapperStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#000',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  };

  const messageStyle = {
    textAlign: 'center',
    marginTop: '15px',
    color: '#333',
    fontWeight: 'bold',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <h2 style={headingStyle}>Submit Your Query</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={inputStyle}
          />
          {errors.name && <div style={errorStyle}>{errors.name}</div>}

          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={inputStyle}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}

          <label style={labelStyle}>Query</label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Type your query here..."
            style={textareaStyle}
          />
          {errors.query && <div style={errorStyle}>{errors.query}</div>}

          <button type="submit" style={buttonStyle}>Send Query</button>
        </form>
        {submitMessage && <p style={messageStyle}>{submitMessage}</p>}
      </div>
    </div>
  );
};

export default QueryPage;
