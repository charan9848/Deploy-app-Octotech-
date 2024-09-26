// src/UserAuth.js
import React, { useState, useEffect } from 'react';
import './UserAuth.css';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser, clearError, clearSuccessMessage } from './redux/authSlice';
import { Link } from 'react-router-dom';
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

  const { first, last, email, password } = data;

  const dispatch = useDispatch();
  const { error, loading, successMessage } = useSelector((state) => state.auth);

  useEffect(() => {
    if (successMessage) {
      setJustSignedUp(true); // Set the parent state to indicate a successful signup
    }
  }, [successMessage, setJustSignedUp]);

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!first.trim() || !last.trim()) {
      dispatch(clearError());
      dispatch({ type: 'auth/signupUser/rejected', payload: 'First name and last name are required.' });
      return;
    }

    if (!validateEmail(email)) {
      dispatch(clearError());
      dispatch({ type: 'auth/signupUser/rejected', payload: 'Invalid email. Only Gmail addresses are allowed.' });
      return;
    }

    if (password.length <= 5) {
      dispatch(clearError());
      dispatch({ type: 'auth/signupUser/rejected', payload: 'Password must be more than 5 characters.' });
      return;
    }

    dispatch(signupUser({ first, last, email, password }));
  };

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
                  {successMessage && (
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                      {successMessage}
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
                  <MDBBtn className='w-100 mb-4' size='md' type='submit' disabled={loading}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                  </MDBBtn>
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
