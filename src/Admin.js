import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'charan1234') {
      setError('');
      setSuccessMessage('Login successful!');
      setTimeout(() => {
        navigate('/admindashboard');
      }, 1000); // Navigate to dashboard after 1 second
    } else {
      setError('Invalid email or password.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mt-5" style={{ width: '350px' }}>
      <h2>Admin Login</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        {error && <div className="alert alert-danger mb-3">{error}</div>}
        {successMessage && <div className="alert alert-success mb-3 pb-lg-2">{successMessage}</div>}
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
