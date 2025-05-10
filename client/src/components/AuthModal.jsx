import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';

export default function EmailOtpAuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState(null);
  const [errors, setErrors] = useState({});

  // Generate a random OTP (6 digits)
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  // Send OTP to user's email
  const sendOtpToEmail = (email) => {
    const otp = generateOtp();
    // Save the OTP temporarily (in a real app, use a backend to store this securely)
    setSentOtp(otp);

    // You would need to send the OTP to the email address using your backend.
    alert(`OTP sent to ${email}: ${otp}`);
  };

  // Check if email is already registered
  const checkEmailExistence = async (email) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      return signInMethods.length > 0; // If array is not empty, email is already in use
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Handle email authentication
  const handleEmailAuth = async () => {
    const newErrors = {};

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (mode === 'signup') {
      if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
      else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

      // Check if email already exists
      const emailExists = await checkEmailExistence(email);
      if (emailExists) {
        newErrors.email = 'Email is already registered. Please log in instead.';
      }
    }

    if (!otp) newErrors.otp = 'Please enter the OTP sent to your email';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      if (mode === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created. Please verify your email and OTP.");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Signed in successfully!");
      }

      // Verify OTP
      if (otp !== sentOtp) {
        alert("Invalid OTP");
        return;
      }

      resetFields();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Authentication failed");
    }
  };

  // Reset all fields
  const resetFields = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setOtp('');
    setSentOtp(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">{mode === 'signin' ? 'Log In' : 'Sign Up'}</h2>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}

        {mode === 'signup' && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border w-full p-2 mb-2 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mb-2">{errors.confirmPassword}</p>}
          </>
        )}

        <input
          type="text"
          placeholder="Enter OTP sent to email"
          className="border w-full p-2 mb-2 rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {errors.otp && <p className="text-red-500 text-sm mb-2">{errors.otp}</p>}

        <button onClick={handleEmailAuth} className={`bg-${mode === 'signin' ? 'blue' : 'green'}-500 text-white px-4 py-2 rounded w-full mb-4`}>
          {mode === 'signin' ? 'Log In' : 'Sign Up'}
        </button>

        <div className="flex justify-between mb-2 text-sm">
          <button onClick={() => { setMode('signin'); resetFields(); }} className={`text-${mode === 'signin' ? 'blue' : 'gray'}-600 underline`}>
            Login
          </button>
          
          <button onClick={() => { setMode('signup'); resetFields(); }} className={`text-${mode === 'signup' ? 'green' : 'gray'}-600 underline`}>
            Sign Up
          </button>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <button onClick={() => sendOtpToEmail(email)} className="bg-red-500 text-white px-4 py-2 rounded">
            Send OTP to Email
          </button>
        </div>

        <button onClick={() => { onClose(); resetFields(); }} className="bg-gray-500 text-white px-4 py-2 rounded w-full">Close</button>
      </div>
    </div>
  );
}
