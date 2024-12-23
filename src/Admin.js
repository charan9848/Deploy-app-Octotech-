import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import backgroundImage from '../src/images/cool.jpg'; // Update with the correct path
import './Admin.css';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      if (!email || !password) {
        setError('Email and password are required.');
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const adminDoc = await getDoc(doc(db, 'admins', uid));
      if (adminDoc.exists()) {
        setSuccessMessage('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/admindashboard');
        }, 1000);
      } else {
        setError('You are not authorized as an admin.');
      }
    } catch (error) {
      console.error('Firebase Error:', error);
      setError('Invalid credentials. Please check your email and password.');
    }
  };

  return (
    <div className="admin-login" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.9)' }}>
      <div className="admin-login-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
        <div className="admin-login-header">
          <h1 className="admin-login-title">Admin Portal</h1>
          <p className="admin-login-subtitle">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="admin-alert admin-alert-danger">{error}</div>}
          {successMessage && <div className="admin-alert admin-alert-success">{successMessage}</div>}
          
          <div className="admin-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="admin-submit-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
