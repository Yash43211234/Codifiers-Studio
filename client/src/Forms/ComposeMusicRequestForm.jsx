import React, { useState } from 'react';

const ComposeMusicRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    social: '',
    projectType: '',
    platform: '',
    mood: '',
    referenceLinks: '',
    additionalInfo: '',
    heardFrom: '',
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value && key !== 'social') newErrors[key] = 'Required';
    });
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
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Social: formData.social,
      ProjectType: formData.projectType,
      Platform: formData.platform,
      Mood: formData.mood,
      ReferenceLinks: formData.referenceLinks,
      AdditionalInfo: formData.additionalInfo,
      HeardFrom: formData.heardFrom,
      Timestamp: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
    };

    try {
      const response = await fetch(
        'https://api.sheetbest.com/sheets/ceebde73-f00e-4815-acda-59614a44508b',
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
          name: '',
          email: '',
          phone: '',
          social: '',
          projectType: '',
          platform: '',
          mood: '',
          referenceLinks: '',
          additionalInfo: '',
          heardFrom: '',
        });
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

  const styles = {
    page: {
      backgroundColor: '#FFEB3B',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      background: '#ffeb3b',
      borderRadius: '10px',
      padding: '2rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    formGroup: {
      display: 'flex',
      flexWrap: 'wrap',  // Allow wrapping on smaller screens
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    label: {
      flex: '0 0 250px',  // Fixed width label
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    input: {
      flex: '1 1 200px',  // Flexible input
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      minWidth: '0',  // Prevent overflow
    },
    textarea: {
      flex: '1 1 200px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      minHeight: '80px',
      minWidth: '0',
    },
    error: {
      color: 'red',
      fontSize: '0.8rem',
      flexBasis: '100%',
      marginLeft: '250px',
    },
    note: {
      marginTop: '1rem',
      fontStyle: 'italic',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '1rem',
      width: '100%',
      maxWidth: '200px',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    subtitle: {
      marginBottom: '2rem',
      textAlign: 'center',
    },
    submitMessage: {
      marginTop: '1rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      label: {
        flex: '0 0 100%',
        marginBottom: '0.25rem',
      },
      input: {
        flex: '1 1 100%',
      },
      textarea: {
        flex: '1 1 100%',
      },
      error: {
        marginLeft: '0',
      },
    },
  };

  const renderInput = (label, name, type = 'text') => (
    <div style={styles.formGroup}>
      <label htmlFor={name} style={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        style={styles.input}
      />
      {errors[name] && <div style={styles.error}>{errors[name]}</div>}
    </div>
  );

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Ready for a new Journey</h2>
        <p style={styles.subtitle}>
          Please fill out the form below to let us know about your project.
        </p>
        <form onSubmit={handleSubmit}>
          {renderInput('Name*', 'name')}
          {renderInput('Email Address*', 'email', 'email')}
          {renderInput('Phone Number*', 'phone', 'tel')}
          {renderInput('Social ID (Optional)', 'social')}
          {renderInput('Platform*', 'platform')}
          {renderInput('Mood*', 'mood')}
          <div style={styles.formGroup}>
            <label htmlFor="projectType" style={styles.label}>Project Type*</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select</option>
              <option value="Pro Music Composition">Pro Music Composition</option>
              <option value="Pro Audio Recording">Pro Audio Recording</option>
              <option value="Pro Audio Editing & Arrangement">Pro Audio Editing & Arrangement</option>
              <option value="Pro Sound Design">Pro Sound Design</option>
              <option value="Pro Audio Mixing">Pro Audio Mixing</option>
              <option value="Pro Audio Mastering">Pro Audio Mastering</option>
              <option value="Music Distribution">Music Distribution</option>
              <option value="Video Production">Video Production</option>
              <option value="Music Promotion">Music Promotion</option>
              <option value="Artist Management">Artist Management</option>
            </select>
            {errors.projectType && <div style={styles.error}>{errors.projectType}</div>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="referenceLinks" style={styles.label}>Reference Links*</label>
            <textarea
              id="referenceLinks"
              name="referenceLinks"
              value={formData.referenceLinks}
              onChange={handleChange}
              style={styles.textarea}
            />
            {errors.referenceLinks && <div style={styles.error}>{errors.referenceLinks}</div>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="additionalInfo" style={styles.label}>Additional Info*</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              style={styles.textarea}
            />
            {errors.additionalInfo && <div style={styles.error}>{errors.additionalInfo}</div>}
          </div>
          {renderInput('How did you hear about us?*', 'heardFrom')}
          
          {submitMessage && <p style={styles.submitMessage}>{submitMessage}</p>}
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ComposeMusicRequestForm;
