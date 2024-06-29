import React, { useEffect, useState } from 'react';
import UserAuth from './UserAuth';
import LoginAuth from './LoginAuth';
import Navbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { auth } from './firebase';
import DashboardNavbar from './DashboardNavBar';
import AllTemplates from './AllTemplates';
import Loader from './Loader'; // Import the Loader component

const App = () => {
  const [presentUser, setPresentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user?.uid,
          email: user?.email,
        });
      } else {
        setPresentUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        {presentUser ? <DashboardNavbar presentUser={presentUser} /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<UserAuth />} />
          <Route path="/login" element={<LoginAuth />} />
          <Route
            path="/dashboard"
            element={presentUser ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/Alltemplates"
            element={presentUser ? <AllTemplates /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
