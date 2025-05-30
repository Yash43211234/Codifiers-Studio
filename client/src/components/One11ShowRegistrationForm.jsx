import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './One11ShowRegistrationForm.css';

const One11ShowRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '+91',
    stageName: '',
    email: '',
    category: '',
    performanceType: '',
    portfolioLink: '',
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
      PortfolioLink: formData.portfolioLink,
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
          portfolioLink: '',
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

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 className="form-title">The One 11 Show Registration</h2>

        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name*', name: 'fullName', type: 'text' },
            { label: 'Contact Number*', name: 'contactNumber', type: 'tel' },
            { label: 'Stage Name / Band Name*', name: 'stageName', type: 'text' },
            { label: 'Email Address*', name: 'email', type: 'email' },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <div className="form-field">
                <label htmlFor={name} className="form-label">{label}</label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              {errors[name] && <div className="form-error">{errors[name]}</div>}
            </div>
          ))}

          {/* Category */}
          <div>
            <div className="form-field">
              <label htmlFor="category" className="form-label">Choose Category*</label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">-- Select --</option>
                <option value="Battle of Bands">Battle of Bands</option>
                <option value="Battle of Singer/Songwriter">Battle of Singer/Songwriter</option>
                <option value="Battle of Rappers">Battle of Rappers</option>
                <option value="Battle of DJs">Battle of DJs</option>
                <option value="Battle of Musicians (Instrument Battle)">Battle of Musicians (Instrument Battle)</option>
              </select>
            </div>
            {errors.category && <div className="form-error">{errors.category}</div>}
          </div>

          {/* Performance Type */}
          <div>
            <div className="form-field">
              <label htmlFor="performanceType"  className="form-label">Solo or Group?*</label>
              <select
                name="performanceType"
                id="performanceType"
                value={formData.performanceType}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">-- Select --</option>
                <option value="Solo">Solo</option>
                <option value="Duo">Duo</option>
                <option value="Band/Group">Band/Group</option>
              </select>
            </div>
            {errors.performanceType && <div className="form-error">{errors.performanceType}</div>}
          </div>

          {/* Portfolio Link */}
          <div>
            <div className="form-field">
              <label htmlFor="portfolioLink" className='form-label'>
                Share your Work/Portfolio (Google Drive link)*<br />
                <small style={{ color: "gray" }}>
                  (*Note - Give access to this <strong>theone11show@gmail.com</strong> mail)
                </small>
              </label>
              <textarea
                name="portfolioLink"
                id="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleChange}
                className="form-textarea"
              />
            </div>

            {errors.portfolioLink && <div className="form-error">{errors.portfolioLink}</div>}
          </div>

          {/* Bio */}
          <div>
            <div className="form-field">
              <label htmlFor="bio" className="form-label">Short Artist/Band Bio*</label>
              <textarea
                name="bio"
                id="bio"
                value={formData.bio}
                onChange={handleChange}
                className="form-textarea"
              />
            </div>
            {errors.bio && <div className="form-error">{errors.bio}</div>}
          </div>

          {/* Signature */}
          <div>
            <div className="form-field">
              <label htmlFor="signature" className="form-label">Type Your Name to Sign*</label>
              <input
                type="text"
                name="signature"
                id="signature"
                value={formData.signature}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            {errors.signature && <div className="form-error">{errors.signature}</div>}
          </div>

          {submitMessage && <p className="submit-message">{submitMessage}</p>}

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default One11ShowRegistrationForm;
