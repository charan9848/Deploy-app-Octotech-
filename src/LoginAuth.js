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

  const { email, password } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      setAlertMessage("Email and password are required");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
      alert("Login Successfully");
      window.location.href = "/Dashboard";
    } catch (err) {
      console.error(err);

      // Handle specific errors and set alert message accordingly
      switch (err.code) {
        case "auth/invalid-email":
          setAlertMessage("Email is not valid");
          break;
        case "auth/wrong-password":
          setAlertMessage("Password is incorrect");
          break;
        case "auth/user-not-found":
          setAlertMessage("User not found");
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
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
                  {alertMessage && <p className="text-danger mb-3 pb-lg-2">{alertMessage}</p>}
                  <MDBInput wrapperClass='mb-4 mx-5 w-100 ' labelClass='text-white' label='Email address' name='email' value={email} id='formControlLg' type='email' size="lg" onChange={changeHandler} />
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' name='password' value={password} id='formControlLg' type='password' size="lg" onChange={changeHandler} />
                  <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  <MDBBtn outline className='mx-2 px-5' color='white' size='lg' type='Submit'>
                    Login
                  </MDBBtn>
                  <br />
                  <div>
                    <Link to='/signup'><p className="mb-0">Don't have an account? SignUp here</p></Link>
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
