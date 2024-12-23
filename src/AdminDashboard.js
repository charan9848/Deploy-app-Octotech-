import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { auth, db } from './firebase';
import { signOut } from 'firebase/auth';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'; // Added onSnapshot for real-time updates
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState('');
  const [logoutError, setLogoutError] = useState('');
  const [userCount, setUserCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [newUsers, setNewUsers] = useState(false); // State to track new users

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLogoutMessage('Logout successful.');
      setTimeout(() => {
        navigate('/admin'); // Redirect to login page
      }, 2500);
    } catch (error) {
      console.error('Error during logout:', error);
      setLogoutError('Failed to logout. Please try again.');
    }
  };

  // Fetch user count and listen for changes in real-time
  useEffect(() => {
    const usersCollection = collection(db, 'users');

    // Use onSnapshot to listen for real-time updates
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      const currentUserCount = snapshot.size;
      setUserCount(currentUserCount);

      // Check if new users have been added since the last check
      if (currentUserCount > userCount) {
        setNewUsers(true);
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [userCount]);

  // Fetch customer count from Firestore
  useEffect(() => {
    const fetchCustomerCount = async () => {
      try {
        const customersCollection = collection(db, 'customers');
        const customerSnapshot = await getDocs(customersCollection);
        setCustomerCount(customerSnapshot.size); // Set the customer count to the number of documents
      } catch (error) {
        console.error('Error fetching customer count:', error);
      }
    };

    fetchCustomerCount();
  }, []); // Only fetch once when the component mounts

  // Clear the messages after a set time
  useEffect(() => {
    if (logoutMessage) {
      const timer = setTimeout(() => {
        setLogoutMessage('');
      }, 2500);
      return () => clearTimeout(timer);
    }
    if (logoutError) {
      const timer = setTimeout(() => {
        setLogoutError('');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [logoutMessage, logoutError]);

  const handleUserDetailsClick = () => {
    setNewUsers(false); // Clear the new user badge when user details are viewed
    navigate('/admindashboard/userdetails');
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <p className="dashboard-subtitle">Manage your templates, users, and applications</p>
        </div>

        {logoutMessage && <div className="alert alert-success">{logoutMessage}</div>}
        {logoutError && <div className="alert alert-danger">{logoutError}</div>}

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/admindashboard/viewtemplates')}
            >
              View Templates
            </button>
          </div>

          <div className="dashboard-card">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/admindashboard/addtemplate')}
            >
              Add Template
            </button>
          </div>

          <div className="dashboard-card">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/admindashboard/sliderimages')}
            >
              Sliders
            </button>
          </div>

          <div className="dashboard-card">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/admindashboard/customerapplications')}
            >
              Customers
              <span className="stats-badge">{customerCount}</span>
            </button>
          </div>

          <div className="dashboard-card">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleUserDetailsClick}
            >
              User Details
              <span className="stats-badge">{userCount}</span>
            </button>
          </div>

          <div className="dashboard-card">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="container mt-5">
          <Outlet />
        </div>

        <footer className="dashboard-footer">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="col-md-4 d-flex align-items-center">
                <span className="text-muted"> 2024 Octotech Creations, Inc</span>
              </div>

              <div className="social-icons">
                <a href="#" className="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </a>
                <a href="#" className="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
                <a href="#" className="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;
