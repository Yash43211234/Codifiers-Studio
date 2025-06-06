import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaCheck, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const MusicCourseForm = () => {
  const navigate = useNavigate();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: [],
    mode: '',
    goals: '',
    experience: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        courses: checked
          ? [...prev.courses, value]
          : prev.courses.filter((course) => course !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    if (!formData.mode) errors.mode = 'Please select a learning mode.';
    if (formData.courses.length === 0) errors.courses = 'Select at least one course.';
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);  // start submitting

    const payload = {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Courses: formData.courses.join(', '),
      Mode: formData.mode,
      Goals: formData.goals,
      Experience: formData.experience,
      Timestamp: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
    };

    try {
      const response = await fetch("https://api.sheetbest.com/sheets/d44f0ab8-40bb-4eb3-bb8c-4b42c4354c34", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("✅ Form submitted successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          courses: [],
          mode: '',
          goals: '',
          experience: ''
        });
        setFormErrors({});
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate('/submission-successfully');
      } else {
        setSubmitStatus("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("❌ An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);  // end submitting
    }
  };


  return (
    <div style={backgroundStyle}>
      {/* Animated Icons */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={iconStyle1}>
        <FaGraduationCap size={60} color="#fff" />
      </motion.div>
      <motion.div animate={{ y: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 4 }} style={iconStyle2}>
        <FaBookOpen size={60} color="#fff" />
      </motion.div>
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5 }} style={iconStyle3}>
        <FaCheck size={60} color="#fff" />
      </motion.div>

      <div style={formContainer}>
        <h2 style={heading}>🎓 Register for Our Music Business Course</h2>
        <p style={description}>
          Fill out the form below to sign up for our course and take your music production skills to the next level.
        </p>

        {submitStatus && (
          <p style={{ color: submitStatus.startsWith("✅") ? "green" : "red", marginBottom: '20px' }}>
            {submitStatus}
          </p>
        )}

        <form onSubmit={handleSubmit} style={formStyle}>
          <h3 style={subHeading}>🧑‍🎓 Personal Info</h3>

          <label><FaUser /> Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
          {formErrors.name && <p style={errorStyle}>{formErrors.name}</p>}

          <label><FaEnvelope /> Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
          {formErrors.email && <p style={errorStyle}>{formErrors.email}</p>}

          <label><FaPhone /> Phone Number (Optional)</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />

          <h3 style={subHeading}>📜 Courses</h3>
          {courseList.map((course, idx) => (
            <div key={idx} style={checkboxContainer}>
              <label>
                <input
                  type="checkbox"
                  value={course}
                  checked={formData.courses.includes(course)}
                  onChange={handleChange}
                />{" "}
                {course}
              </label>
            </div>
          ))}
          {formErrors.courses && <p style={errorStyle}>{formErrors.courses}</p>}

          <label style={{ marginTop: '20px', display: 'block' }}>Preferred learning mode:</label>
          <select name="mode" value={formData.mode} onChange={handleChange} style={inputStyle} required>
            <option value="">-- Select --</option>
            <option value="Offline">Offline (at our highly equipped facility)</option>
            <option value="Online">Online (live via Zoom or Google Meet)</option>
          </select>
          {formErrors.mode && <p style={errorStyle}>{formErrors.mode}</p>}

          <label style={{ marginTop: '20px' }}>What are your goals for this course?</label>
          <textarea name="goals" value={formData.goals} onChange={handleChange} style={textAreaStyle} />

          <label style={{ marginTop: '20px' }}>Any prior experience with music business?</label>
          <textarea name="experience" value={formData.experience} onChange={handleChange} style={textAreaStyle} />

          <button
            type="submit"
            style={{ ...buttonStyle, opacity: isSubmitting ? 0.6 : 1, pointerEvents: isSubmitting ? 'none' : 'auto' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

        </form>
      </div>
    </div>
  );
};

const courseList = [
  'Diploma in Music Business',
  'Diploma in Music Production & Music Business',
  'Diploma in Music Production, Sound Designing & Music Business'
];

// Inline styles
const backgroundStyle = {
  backgroundColor: '#fcd936',
  position: 'relative',
  padding: '40px 20px',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif'
};

const formContainer = {
  backgroundColor: '#fcd936',
  borderRadius: '10px',
  padding: '30px',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#000'
};

const description = {
  marginBottom: '30px',
  fontSize: '16px',
  color: '#444'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const subHeading = {
  marginBottom: '10px',
  fontSize: '20px',
  fontWeight: 'bold'
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginTop: '8px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px'
};

const textAreaStyle = {
  ...inputStyle,
  minHeight: '80px',
  resize: 'vertical'
};

const buttonStyle = {
  marginTop: '30px',
  padding: '12px 24px',
  backgroundColor: '#000',
  color: '#F0E81B',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  cursor: 'pointer'
};

const checkboxContainer = {
  marginTop: '10px',
  marginBottom: '10px'
};

const iconStyle1 = {
  position: 'absolute',
  top: '30px',
  left: '10%',
  zIndex: 0
};

const iconStyle2 = {
  position: 'absolute',
  top: '500px',
  right: '15%',
  zIndex: 0
};

const iconStyle3 = {
  position: 'absolute',
  bottom: '23%',
  left: '15%',
  zIndex: 0
};

const errorStyle = {
  color: 'red',
  fontSize: '14px',
  marginTop: '-15px',
  marginBottom: '10px'
};

export default MusicCourseForm;
