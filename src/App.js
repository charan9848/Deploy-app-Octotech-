import React, { useEffect, useState } from 'react';
import UserAuth from './UserAuth';
import LoginAuth from './LoginAuth';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { auth, db } from './firebase';
import DashboardNavbar from './DashboardNavBar';
import AllTemplates from './AllTemplates';
import Loader from './Loader'; // Import the Loader component
import Apply from './Apply';
import { getDoc, doc } from 'firebase/firestore';
import Admin from './Admin';
import Addtemplate from './Addtemplate';
import Viewtemplates from './Viewtemplates';
import AdminDashboard from './AdminDashboard';
import Customerapplications from './Customerapplications';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';
import Userdetails from './Userdetails';
import SliderImages from './SliderImages';


const App = () => {
  const [presentUser, setPresentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [justSignedUp, setJustSignedUp] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setPresentUser({
            uid: user.uid,
            email: user.email,
            firstname: userData.firstname,
            lastname: userData.lastname,
          });
        }
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
        {!justSignedUp && presentUser ? <DashboardNavbar presentUser={presentUser} /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<UserAuth setJustSignedUp={setJustSignedUp} />} />
          <Route path="/login" element={<LoginAuth />} />
         
          <Route path="*" element={<NotFound />} />
       
          <Route path="/admin" element={<Admin />} />
          
          {/* Admin Dashboard Route */}
          <Route
            path="/admindashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          >
            <Route path="customerapplications" element={<Customerapplications />} />
            <Route path="addtemplate" element={<Addtemplate />} />
            <Route path="viewtemplates" element={<Viewtemplates />} />           
            <Route path="userdetails" element={<Userdetails />} />
            <Route path="sliderimages" element={<SliderImages />} />
          </Route>
          
          <Route
            path="/dashboard"
            element={presentUser ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/Alltemplates"
            element={presentUser ? <AllTemplates /> : <Navigate to="/login" />}
          />
          <Route
            path="/Apply"
            element={presentUser ? <Apply /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;