import React, { useState } from 'react';
import './LoginAuth.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

function LoginAuth() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [alertMessage, setAlertMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // New state for success message

  const { email, password } = data;

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlertMessage("Email and password are required");
      return;
    }
    if (!validateEmail(email)) {
      setAlertMessage("Email is not valid");
      return;
    }

    if (password.length <= 5) {
      setAlertMessage("Password must be more than 5 characters.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
      setSuccessMessage("Login Successfully"); // Set success message on successful login
      setTimeout(() => {
        setSuccessMessage(null); // Clear success message after 3 seconds
      }, 5000);
      window.location.href = "/Dashboard";
    } catch (err) {
      console.error(err);
      console.log(err.code);

      switch (err.code) {
        case "auth/invalid-email":
          setAlertMessage("Email is not valid");
          break;
        case "auth/user-disabled":
          setAlertMessage("User account is disabled");
          break;
        case "auth/user-not-found":
          setAlertMessage("Email not found");
          break;
        case "auth/wrong-password":
        case "auth/invalid-credential":
          setAlertMessage("Wrong password");
          break;
        default:
          setAlertMessage("An error occurred");
      }
    }
  };

  return (
    <div className='Login'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
              <MDBCard className='bg-light text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                  <h2 className="fw-bold mb-2 text-uppercase">Welcome Back</h2>
                  <p className="text-dark-50 mb-4">Please enter your credentials to continue</p>
                  {alertMessage && (
                    <div className="alert alert-danger" role="alert">
                      {alertMessage}
                    </div>
                  )}
                  
                  <MDBInput 
                    wrapperClass='mb-4 w-100' 
                    labelClass='text-dark' 
                    label='Email address' 
                    name='email' 
                    value={email} 
                    type='email' 
                    size="lg" 
                    onChange={changeHandler}
                    required 
                  />
                  <MDBInput 
                    wrapperClass='mb-4 w-100' 
                    labelClass='text-dark' 
                    label='Password' 
                    name='password' 
                    value={password} 
                    type='password' 
                    size="lg" 
                    onChange={changeHandler}
                    required 
                  />
                  <MDBBtn className='w-100 mb-4' size='lg' type='submit'>
                    Sign in
                  </MDBBtn>
                  <div className="text-center">
                    <Link to='/signup' className="text-decoration-none">
                      <p className="mb-0">Don't have an account? <span className="fw-bold">Sign up</span></p>
                    </Link>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  );
}

export default LoginAuth;
