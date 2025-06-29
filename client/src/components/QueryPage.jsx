import React, { useState, useEffect } from 'react';
import { MessageSquare   } from 'lucide-react';
import {
  FaMusic,
  FaHeadphones,
  FaGraduationCap,
  FaUser,
  FaBookOpen,
  FaEnvelope,
  FaPhone,
  FaCheck,
} from 'react-icons/fa';

// Icons config
const backgroundIcons = [
  { Icon: FaMusic, top: "5%", left: "5%", animation: "float1", duration: "2s" },
  { Icon: FaHeadphones, top: "10%", left: "20%", animation: "float2", duration: "2s" },
  { Icon: FaGraduationCap, top: "15%", left: "35%", animation: "float3", duration: "2s" },
  { Icon: FaUser, top: "20%", left: "50%", animation: "float4", duration: "2s" },
  { Icon: FaBookOpen, top: "25%", left: "65%", animation: "float1", duration: "2s" },
  { Icon: FaEnvelope, top: "30%", left: "80%", animation: "float2", duration: "2s" },
  { Icon: FaPhone, top: "40%", left: "10%", animation: "float3", duration: "2s" },
  { Icon: FaCheck, top: "45%", left: "25%", animation: "float4", duration: "2s" },
  { Icon: FaMusic, top: "50%", left: "40%", animation: "float1", duration: "2s" },
  { Icon: FaHeadphones, top: "55%", left: "55%", animation: "float2", duration: "2s" },
  { Icon: FaGraduationCap, top: "60%", left: "70%", animation: "float3", duration: "2s" },
  { Icon: FaUser, top: "65%", left: "85%", animation: "float4", duration: "2s" },
  { Icon: FaBookOpen, top: "70%", left: "15%", animation: "float1", duration: "2s" },
  { Icon: FaEnvelope, top: "75%", left: "30%", animation: "float2", duration: "2s" },
  { Icon: FaPhone, top: "80%", left: "45%", animation: "float3", duration: "2s" },
  { Icon: FaCheck, top: "85%", left: "60%", animation: "float4", duration: "2s" },
  { Icon: FaMusic, top: "90%", left: "75%", animation: "float1", duration: "2s" },
  { Icon: FaHeadphones, top: "5%", right: "10%", animation: "float2", duration: "2s" },
  { Icon: FaBookOpen, bottom: "10%", right: "20%", animation: "float3", duration: "2s" },
  { Icon: FaGraduationCap, bottom: "5%", left: "10%", animation: "float4", duration: "2s" },
];

const QueryPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name should not exceed 50 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.query.trim()) {
      newErrors.query = 'Query is required';
    } else if (formData.query.length < 10) {
      newErrors.query = 'Query should be at least 10 characters';
    } else if (formData.query.length > 500) {
      newErrors.query = 'Query should not exceed 500 characters';
    }

    return newErrors;
  };

  const sanitize = (str) => str.replace(/<[^>]*>?/gm, '');

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
      Name: sanitize(formData.name),
      Email: sanitize(formData.email),
      Query: sanitize(formData.query),
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

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  // Styles
  const containerStyle = {
    backgroundColor: '#fcda39',
    minHeight: '100vh',
    padding: '40px 20px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const iconStyle = (icon) => ({
    position: 'absolute',
    top: icon.top,
    left: icon.left,
    right: icon.right,
    bottom: icon.bottom,
    fontSize: '38px',
    color: 'rgba(0,0,0,0.07)',
    animation: `${icon.animation} ${icon.duration} infinite alternate`,
    pointerEvents: 'none',
  });

  const formWrapperStyle = {
    backgroundColor: '#e2c22d',
    borderRadius: '12px',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    position: 'relative',
    zIndex: 2,
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
      {/* Floating icons */}
      {backgroundIcons.map((iconObj, index) => {
        const { Icon } = iconObj;
        return <Icon key={index} style={iconStyle(iconObj)} />;
      })}

      <div style={formWrapperStyle}>
        <div
          style={{
            width: "5rem",
            height: "5rem",
            backgroundColor: "#000",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <MessageSquare   style={{ width: "2.5rem", height: "2.5rem", color: "#facc15" }} />
        </div>
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

      {/* CSS animations */}
      <style>{`
        @keyframes float1 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(10px); }
        }
        @keyframes float3 {
          0% { transform: translateX(0px); }
          100% { transform: translateX(10px); }
        }
        @keyframes float4 {
          0% { transform: translateX(0px); }
          100% { transform: translateX(-10px); }
        }
      `}</style>
    </div>
  );
};

export default QueryPage;
