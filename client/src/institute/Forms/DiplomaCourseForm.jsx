import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaCheck, FaBookOpen, FaMusic, FaHeadphones } from 'react-icons/fa';

const iconStyle = {
  position: "absolute",
  color: "rgba(0,0,0,0.1)",
  fontSize: "48px",
  userSelect: "none",
  pointerEvents: "none",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
};


const DiplomaCourseForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courses: [],
    mode: "",
    goals: "",
    experience: "",
  });

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




  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        courses: checked
          ? [...prev.courses, value]
          : prev.courses.filter((course) => course !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const payload = {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Courses: formData.courses.join(", "),
      Mode: formData.mode,
      Goals: formData.goals,
      Experience: formData.experience,
      Timestamp: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
    };

    try {
      const response = await fetch('https://api.sheetbest.com/sheets/d44f0ab8-40bb-4eb3-bb8c-4b42c4354c34/tabs/Music_Business_Diploma', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate('/submission-successfully');
        setFormData({
          name: "",
          email: "",
          phone: "",
          courses: [],
          mode: "",
          goals: "",
          experience: "",
        });
      } else {
        setSubmitStatus("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("❌ An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fcd936",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "relative", // for absolute icons inside
        overflow: "hidden",
      }}
    >
      {/* Animated background icons */}
      {backgroundIcons.map(({ Icon, animation, duration, ...styleProps }, idx) => (
        <Icon
          key={idx}
          style={{
            ...iconStyle,
            ...styleProps,
            animationName: animation,
            animationDuration: duration,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        />
      ))}

      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid rgba(0, 0, 0, 0.2',
          backgroundColor: "#e3c73b",
          maxWidth: "600px",
          width: "100%",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          position: "relative",
          zIndex: 1, // ensure form is above icons
        }}
      >
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
          <GraduationCap style={{ width: "2.5rem", height: "2.5rem", color: "#facc15" }} />
        </div>

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#111",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          Register for Our Diploma Courses
        </h2>
        <p style={{ marginBottom: "30px", fontSize: "16px", color: "#333" }}>
          Fill out the form below to sign up for our course and take your music
          production skills to the next level.
        </p>

        {submitStatus && (
          <p style={{ color: submitStatus.startsWith("✅") ? "green" : "red", marginBottom: '20px' }}>
            {submitStatus}
          </p>
        )}

        <label style={labelStyle}>
          <FaUser style={{ marginRight: 8, verticalAlign: "middle" }} /> Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
          placeholder="Enter your full name"
        />

        <label style={labelStyle}>
          <FaEnvelope style={{ marginRight: 8, verticalAlign: "middle" }} /> Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
          placeholder="Enter your email address"
        />

        <label style={labelStyle}>
          <FaPhone style={{ marginRight: 8, verticalAlign: "middle" }} /> Phone Number (Optional)
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter your phone number"
        />

        <h3
          style={{
            marginTop: "30px",
            color: "#444",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaGraduationCap /> Diploma Courses
        </h3>

        {[
          "Diploma in Music Production",
          "Diploma in Sound Designing",
          "Diploma in Music Production & Music Business",
          "Diploma in Music Production & Sound Designing",
          "Diploma in Music Production, Sound Designing & Music Business",
        ].map((course) => (
          <div key={course} style={checkboxContainer}>
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

        <label style={{ ...labelStyle, marginTop: "20px", display: "block" }}>
          Preferred learning mode:
        </label>
        <select
          name="mode"
          value={formData.mode}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">-- Select --</option>
          <option value="Offline">
            Offline (attend in-person at our highly equipped facility)
          </option>
          <option value="Online">
            Online (attend live via Zoom or Google Meet)
          </option>
        </select>

        <label style={labelStyle}>What are your goals for this course?</label>
        <textarea
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          style={textAreaStyle}
          placeholder="Describe your goals"
        />

        <label style={labelStyle}>Any prior experience with music production?</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          style={textAreaStyle}
          placeholder="Share your experience"
        />

        <button
          type="submit"
          style={{
            ...buttonStyle,
            opacity: isSubmitting ? 0.6 : 1,
            pointerEvents: isSubmitting ? 'none' : 'auto',
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* CSS Keyframes as style tag */}
      <style>{`
  @keyframes float1 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  @keyframes float2 {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(15px); }
  }
  @keyframes float3 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
  @keyframes float4 {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-10px); }
  }
`}</style>

    </div>
  );
};

// Styles (same as before)
const labelStyle = {
  marginTop: "15px",
  display: "block",
  fontWeight: "600",
  color: "#222",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  marginBottom: "20px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "16px",
};

const textAreaStyle = {
  ...inputStyle,
  minHeight: "80px",
  resize: "vertical",
};

const checkboxContainer = {
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "15px",
};

const buttonStyle = {
  marginTop: "30px",
  padding: "12px 24px",
  backgroundColor: "#000",
  color: "#F0E81B",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default DiplomaCourseForm;
