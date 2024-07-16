import React, { useState } from 'react';
import './UserAuth.css';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function UserAuth({ setJustSignedUp }) {
  const [data, setData] = useState({
    first: "",
    last: "",
    email: "",
    password: ""
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { first, last, email, password } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!first.trim() || !last.trim()) {
      setError('First name and last name are required.');
      setShowSuccessAlert(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email is entered, Only Gmail addresses are allowed.');
      setShowSuccessAlert(false);
      return;
    }

    if (password.length <= 5) {
      setError('Password must be more than 5 characters.');
      setShowSuccessAlert(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstname: first,
          lastname: last
        });
      }
      console.log("Account created, Now you can login your account 😀");
      setShowSuccessAlert(true);
      setError(null);
      setData({
        first: "",
        last: "",
        email: "",
        password: ""
      });
      // Set justSignedUp to true and navigate to login page
      setJustSignedUp(true);
    

    } catch (err) {
      console.log(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Email already in use. Please use a different email.');
      } else {
        setError("An error occurred. Please try again.");
      }
      setShowSuccessAlert(false);
    }
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
          <MDBRow>
            <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
              <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                Register Here <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
              </h1>
              <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                For any Video editing, rotoscoping, Animation, 3d VFX, etc...
              </p>
            </MDBCol>
            <MDBCol md='6' className='position-relative'>
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
              <MDBCard className='my-5 bg-glass'>
                <MDBCardBody className='p-5'>
                  {showSuccessAlert && (
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                      Account Created Successfully!, Now you can login your account 😀
                    </Alert>
                  )}
                  {error && (
                    <Alert severity="error">{error}</Alert>
                  )}
                  <br />
                  <MDBRow>
                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='First name' id='form1' name='first' value={first} type='text' onChange={changeHandler} />
                    </MDBCol>
                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='Last name' id='form2' name='last' value={last} type='text' onChange={changeHandler} />
                    </MDBCol>
                  </MDBRow>
                  
                  <MDBInput wrapperClass='mb-4' label='Email' id='form3' name='email' value={email} type='email' onChange={changeHandler} />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form4' name='password' value={password} type='password' onChange={changeHandler} />
                  <MDBBtn className='w-100 mb-4' size='md' type='submit'>Sign Up</MDBBtn>
                  <br />
                  <center>
                    <Link to="/login">
                      <button type="button" className="btn btn-primary">Login</button>
                    </Link>
                  </center>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  );
}

export default UserAuth;
