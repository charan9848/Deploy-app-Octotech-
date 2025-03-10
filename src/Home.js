import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Akash from './images/Akash.jpg'
import Charan from './images/Charan.JPG'
import Raghu from './images/Raghu.jpg'
import Avatar from '@mui/material/Avatar';
import { Typography, Box, Container, Grid } from '@mui/material';
import backgroundVideo from './images/back2.mp4';
import './Home.css';
import octotechlogo from './images/octotechlogo-modified.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MDBInput, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './images/img1.JPG';
import img2 from './images/img2.JPG';
import img3 from './images/img3.JPG';
import img4 from './images/img4.JPG';
import img5 from './images/img5.JPG';
import img6 from './images/img6.JPG';
import img7 from './images/img7.JPG';
import img8 from './images/img8.JPG';
import img9 from './images/img9.JPG';

const images = [
  { src: img1, alt: "First slide", header: "Element 3D", paragraph: "Using After Effects , 3D Camera Tracking " },
  { src: img2, alt: "Second slide", header: "Motion Tracking", paragraph: "Element 3D is a powerful plugin for After Effects developed by Video Copilot." },
  { src: img3, alt: "Third slide", header: "Element 3d", paragraph: "Track motion in 2D or 3D space,Stabilize shaky footage ,Attach elements to moving objects." },
  { src: img4, alt: "Fourth slide", header: "Particles", paragraph: "Particle systems like CC Particle World, Particular (from Red Giant)." },
  { src: img5, alt: "Fifth slide", header: "Fire Particles", paragraph: "Use the Particle System II or CC Particle World effects to create fire." },
  { src: img6, alt: "Sixth slide", header: "Fire and Smoke", paragraph: "Adjust particle parameters to simulate realistic fire behavior." },
  { src: img7, alt: "Seventh slide", header: "Element 3d + Fire paticles + Colour Correction", paragraph: " Create fire particles using a particle system and place them at strategic points in your scene." },
  { src: img8, alt: "Eighth slide", header: "Masking", paragraph: "Customizable parameters (size, birth rate, velocity)." },
  { src: img9, alt: "Ninth slide", header: "Colour Correction", paragraph: "Apply basic corrections first (exposure, white balance), Use curves and color wheels for more advanced adjustments." }
];

const videoUrls = [
  {
    url: 'https://www.youtube.com/embed/U_aM5C83f3c',
    title: 'Video Editing',
    description: ' the process of cutting, arranging, and enhancing video footage to create a cohesive and polished final product.',
  },
  {
    url: 'https://www.youtube.com/embed/NikcHaGHOSo',
    title: 'Reels',
    description: 'Quick cuts or Short edits.',
  },
  {
    url: 'https://www.youtube.com/embed/i3J11Jto_tA',
    title: 'Titles',
    description: 'After Effects titles templates: Dynamic, animated, customizable titles.'
  },
  {
    url: 'https://www.youtube.com/embed/H8N_A12-F-k',
    title: 'Short Film Trailer',
    description: 'Edit your short film in Premiere Pro, then enhance with VFX in After Effects, and finally integrate and finalize in Premiere Pro.',
  },
];

const profiles = [
  {
    name: "Akash",
    img: Akash,
    description: `A skilled video editor with years of specialized expertise in
      video editing using Premiere Pro and After Effects. I specialize
      in crafting high-quality content for social media ads, YouTube
      videos, Instagram reels, commercial business promotions, and more.`,
    // contact: "+91 96529 83774",
    experience: "3 Years Experience",
  },
  {
    name: "Raghu",
    img: Raghu,
    description: `This is Raghu, I'm a VFX artist with 4 years of experience, has worked on numerous Tollywood films, using this  expertise to create stunning visual effects that bring cinematic dreams to life. I use nuke and after effects for composting`,
    // contact: "+91 88865 29625",
    experience: "4 Years Experience",
  },
];

const raviProfile = {
  name: "Gannoj Bhanu Charan",
  img: Charan,
  description: `A dedicated 3D artist with a passion for creating detailed and visually captivating models. I specialize in using tools like Blender and After Effects to turn creative ideas into lifelike 3D designs. One of my proudest creations is a temple door model, where I focused on intricate detailing and architectural precision to bring the design to life.`,
  // contact: "+91 9848728321",
  experience: "1 Years Experience",
};

const Home = () => {
  // youtube api data
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCbTNjIbYIEkOPTtfX3iwsGtPWsEbsnqKg&channelId=UCbTPb63UXH3V1HVeAKMmwBA&part=snippet,id&order=date&maxResults=10`
        );
        const data = await response.json();
        setVideos(data.items);
        setLoading(false); // End loading
      } catch (error) {
        console.error("Error fetching videos: ", error);
        setError('Failed to load videos'); // Set error message
        setLoading(false); // End loading
      }
    };

    fetchVideos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  //youtube api data ended

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_subject: '',
    message: ''
  });

  const form = useRef(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!form.current.checkValidity()) {
      form.current.classList.add('was-validated');
      return;
    }

    try {
      const response = await emailjs.sendForm(
        'service_lfliz7v', // Replace with your EmailJS service ID
        'template_6qarprf', // Replace with your EmailJS template ID
        form.current,
        '0Tf5hyZ2w00RXElJV' // Replace with your EmailJS public key
      );

      if (response.status === 200) {
        setSuccessMessage('Message sent successfully!');
        setErrorMessage('');
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          user_subject: '',
          message: ''
        });
        form.current.classList.remove('was-validated');
      } else {
        setErrorMessage('Failed to send the message. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('An error occurred while sending the message. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <>
   
   
      <div>
        <Container
          sx={{
            position: 'relative',
            overflow: 'hidden',
            color: 'white',
            width: { xs: '100%', md: '100%' },
            maxWidth: { xs: '100%', md: '1600px' },
            margin: '0 auto',
            padding: { xs: 2, sm: 3, md: 4 },
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              zIndex: -2,
            }}
          >
            <video
              src={backgroundVideo}
              autoPlay
              loop
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <img
                  src={octotechlogo}
                  alt="Left Side"
                  style={{
                    maxWidth: '70%',
                    height: 'auto',
                    width: 'auto',
                    maxHeight: '80vh',
                    padding: '50px',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                <Typography variant="h4" gutterBottom textAlign="center">
                  Welcome to <span style={{ color: "#ff4081", fontFamily: " sans-serif" }}>Octotech</span> Video Editing and VFX Agency!
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="center"
                  style={{ fontStyle: "italic", fontSize: "10px" }}
                >
                  At Octotech, we bring your vision to life with our expertise in video editing and visual effects.
                  We create high-quality content that captivates and engages, perfect for social media ads,
                  YouTube videos, Instagram reels, commercial business promotions, and more.
                </Typography>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div>
        <Container
          sx={{
            background: 'white',
            color: 'rgb(89,56,166)',
            width: { xs: '100%', md: '100%' },
            maxWidth: { xs: '100%', md: '1600px' },
            margin: '0 auto',
            padding: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography variant="h4" gutterBottom textAlign="center" color="black">
            Best Works
          </Typography><br />
          <Grid container spacing={6}>
            {videoUrls.map((video, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  sx={{ borderRadius: '10px', overflow: 'hidden' }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingBottom: '56.25%', // 16:9 aspect ratio
                      height: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <iframe
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                    ></iframe>
                  </div>
                  <Typography variant="h6" gutterBottom textAlign="center">
                    {video.title}
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    {video.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      <div className="container mx-auto p-5 bg-blue-600 text-black text-center">
        <p id="Mphasis" className="text-4xl fw-bold fs-5">Templates Available</p>
        <p className="text-lg">Here Some Templates are Available.</p>
      </div>

      <div className="container mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px' }}>
        <div className="Templates">
          <div className="card img-fluid" style={{ width: '350px' }}>
            <img className="card-img-top" src='https://seemymarriage.com/wp-content/uploads/2023/02/Theme-Krishna-1st-Birthday-Invitation-Video-Peacock-feathers-445x250.png' alt="Card image" style={{ width: '100%' }}></img>
            <div className="card-body">
              <h4 className="card-title">Birthday Invitation Video Templates</h4>
              <p className="card-text">Here are some birthday templates available for you to choose from. Click on the button below to explore and select your preferred template:</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>

        <div className="Templates">
          <div className="card img-fluid" style={{ width: '350px' }}>
            <img className="card-img-top" src='https://resource.flexclip.com/templates/cover/w400/indian-wedding-invitation.webp?v=1' alt="Card image" style={{ width: '100%' }}></img>
            <div className="card-body">
              <h4 className="card-title">Wedding Invitations Video Templates</h4>
              <p className="card-text">Explore our collection of wedding templates designed to capture the love and romance of your special day. Click below to choose your perfect wedding template:</p>
              <a href="#Mphasis" className="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>

        <div className="Templates">
          <div className="card img-fluid" style={{ width: '350px' }}>
            <img className="card-img-top" src='https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/6ac579326764518f0e0352d75063a5d433f7c0a21696071512.jpg' alt="Card image" style={{ width: '100%' }}></img>
            <div className="card-body">
              <h4 className="card-title">Engagement Invitation Templates</h4>
              <p className="card-text">Capture the excitement and romance of your engagement with our selection of templates. Click below to browse and select your ideal engagement template:</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row g-0 bg-body-light position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src='https://www.videoconverterfactory.com/tips/imgs-self/best-vfx-software/best-vfx-software-1.jpg' className="w-100" alt="..." style={{ borderRadius: '20px' }} />
          </div>
          <div className="col-md-6 p-5 ps-md-5">
            <h5 className="mt-3">Short Film Editing Available</h5>
            <p>Transform your vision into captivating narratives with our professional editing. From narrative shorts to promotional videos, we specialize in creative transitions and impactful visual effects. Contact us today to enhance your storytelling journey.</p>
            <a href="./login" className="btn btn-success">Go SomeWhere</a>
          </div>
        </div>
      </div>

      <div className="card text-center">
        <div className="card-header ">
          New Offer
        </div>
        <div className="card-body">
          <h5 className="card-title">Professional Reels/Shorts Editing</h5>
          <p className="card-text">Elevate your reels with our unbeatable edting packages</p>
        </div>
      </div>

      <div className="container mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center', gap: '30px' }}>
        <div className="price-container">
          <div className="card img-fluid" style={{ width: '350px' }}>
            <div className="card-body">
              <div className="card-title bg-secondary rounded-pill fs-6 fw-bold text-white">Basic</div>
              <ul style={{ display: 'inline-block', textAlign: 'left', padding: '40px' }}>
                <li >Basic Cutting</li>
                <li >Basic Transitions</li>
                <li >Audio Adjustment</li>
                <li >Colour Correction</li>
              </ul>
              <a href="./login" className="btn btn-primary" >See Profile</a>
            </div>
            <div className='fw-bold fs-5 mb-3'>699/-</div>
          </div>
        </div>

        <div className="price-container">
          <div className="card img-fluid" style={{ width: '350px' }}>
            <div className="card-body">
              <div className="card-title bg-primary rounded-pill fs-6 fw-bold text-white">Standard</div>
              <ul style={{ display: 'inline-block', textAlign: 'left', padding: '40px' }}>
                <li >Colour Correction</li>
                <li >Colour Grading</li>
                <li >Motion Graphics</li>
                <li >Pro Transitions</li>
                <li >Subtitles</li>
                <li >Audio Enchancement</li>
                <li >Sound Effects</li>
              </ul>
              <a href="./login" className="btn btn-primary">See Profile</a>
            </div>
            <div className='fw-bold fs-5 mb-3'>999/-</div>
          </div>
        </div>

        <div className="price-container">
          <div className="card img-fluid" style={{ width: '350px' }}>
            <div className="card-body">
              <div className="card-title bg-warning rounded-pill fw-bold fs-6">Premium</div>
              <ul style={{ display: 'inline-block', textAlign: 'left', padding: '40px' }}>
                <li >Visual Effects</li>
                <li >Text Animation</li>
                <li >Colour Correction</li>
                <li >Colour Grading</li>
                <li >Motion Graphics</li>
                <li >Pro Transitions</li>
                <li >Subtitles</li>
                <li >Audio Enchancement</li>
                <li >Sound Effects</li>
              </ul><br></br>
              <a href="./login" className="btn btn-primary">See Profile</a>
            </div>
            <div className='fw-bold fs-6'>1499/-</div>
          </div>
        </div>
      </div>

      <br />
      <br />
      {/* Youtube videos start */}
      <div className="card text-center">
        <div className="card-header ">
          LATEST VIDEOS FROM YOUTUBE
        </div>
        <div className="card-body">
          <h5 className="card-title"><p><em>Subscribe to Octotech creations, make sure hit the bell icon.</em></p></h5>
          <p className="card-text">https://www.youtube.com/@OCTOTECHCREATIONS</p>
        </div>
      </div>
      <div className='container' style={{ padding: '0 20px' }}>
        <div className='container'>
          <h2>Latest Updates!</h2>
        </div>

        {loading ? (
          <p>Loading videos...</p>
        ) : (
          <Slider {...settings}>
            {videos && videos.length > 0 ? videos.map((video) => (
              <div
                key={video.id.videoId}
                style={{
                  padding: '0 10px',
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    margin: '0 auto',
                    width: '100%',
                    maxWidth: '400px', // Adjust maxWidth as needed
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '10px',
                      margin: 0,
                      height: '60px', // Fixed height for title container
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fff',
                      overflow: 'hidden'
                    }}
                  >
                    <h6 style={{ margin: 0, fontSize: '14px', lineHeight: '20px', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {video.snippet.title}
                    </h6>
                  </div>
                  <iframe
                    width="100%"
                    height="225"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.snippet.title}
                    style={{ display: 'block' }}
                  ></iframe>
                </div>
              </div>
            )) : <p>No videos available.</p>}
          </Slider>
        )}
      </div>
      {/* youtube videos end*/}
      <br />
      <br />
      <div className="card text-center">
        <div className="card-header ">
          ABOUT US
        </div>
        <div className="card-body">
          <h5 className="card-title"><p><em>Meet Our VFX Artist!</em></p></h5>
          <p className="card-text">Transforming imagination into reality with breathtaking visual effects. Explore our artist's portfolio to see the magic of VFX come to life.</p>
        </div>
      </div>

      <div>
        {/* Container (The Band Section) */}
        <div id="band" className="container mt-5 text-center">


          <br />


          {/* Profiles*/}

          <Box sx={{ width: "100%", padding: 2 }}>
            <Grid container spacing={9} justifyContent="center">
              {profiles.map((profile, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 300,
                      margin: "0 auto",
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    <Avatar
                      alt={profile.name}
                      src={profile.img}
                      sx={{ width: 250, height: 250, margin: "0 auto" }}
                    />
                    <Typography variant="h5" gutterBottom>
                      I'm {profile.name},
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ fontStyle: "italic", fontSize: "0.875rem" }}
                    >
                      {profile.description}
                    </Typography>

                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ fontStyle: "italic", fontSize: "0.65rem" }}
                    >
                      - {profile.experience}
                    </Typography>
                    {/* <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ fontStyle: "italic", fontSize: "0.65rem" }}
                    >
                      Contact - {profile.contact}
                    </Typography> */}
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    margin: "0 auto",
                    textAlign: "center",
                    padding: 2,
                  }}
                >
                  <Avatar
                    alt={raviProfile.name}
                    src={raviProfile.img}
                    sx={{ width: 200, height: 200, margin: "0 auto" }}
                  />
                  <Typography variant="h5" gutterBottom>
                    I'm {raviProfile.name},
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ fontStyle: "italic", fontSize: "0.875rem" }}
                  >
                    {raviProfile.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ fontStyle: "italic", fontSize: "0.65rem" }}
                  >
                    - {raviProfile.experience}
                  </Typography>
                  {/* <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ fontStyle: "italic", fontSize: "0.65rem" }}
                  >
                    - {raviProfile.contact}
                  </Typography> */}
                </Box>
              </Grid>
            </Grid>
          </Box>

        </div>

      </div>

      {/* Contact Us*/}
      <div className='flex container mt-5 w-full'>
        <div className='w-full max-w-sm'>
          <MDBValidation noValidate ref={form} onSubmit={sendEmail} className='text-center'>
            <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
            {successMessage && (
              <div className="alert alert-success mb-3 pb-lg-2">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mb-3 pb-lg-2">{errorMessage}</div>
            )}

            <MDBValidationItem feedback='Please provide your name.' invalid style={{ fontSize: '0.75rem' }}>
              <MDBInput
                label='Name'
                name='user_name'
                wrapperClass='mb-4'
                required
                value={formData.user_name}
                onChange={handleChange}
                className='border rounded-md p-2'
              />
            </MDBValidationItem>

            <MDBValidationItem feedback='Please provide a valid email.' invalid style={{ fontSize: '0.75rem' }}>
              <MDBInput
                type='email'
                label='Email address'
                name='user_email'
                wrapperClass='mb-4'
                required
                pattern={emailRegex.source}
                value={formData.user_email}
                onChange={handleChange}
                className='border rounded-md p-2'
              />
            </MDBValidationItem>

            <MDBValidationItem feedback='Please provide a valid phone number.' invalid style={{ fontSize: '0.75rem' }}>
              <MDBInput
                type='text'
                label='Phone Number'
                name='user_phone'
                wrapperClass='mb-4'
                required
                pattern={phoneRegex.source}
                value={formData.user_phone}
                onChange={handleChange}
                className='border rounded-md p-2'
              />
            </MDBValidationItem>

            <MDBValidationItem feedback='Please provide a subject.' invalid style={{ fontSize: '0.75rem' }}>
              <MDBInput
                label='Subject'
                name='user_subject'
                wrapperClass='mb-4'
                required
                value={formData.user_subject}
                onChange={handleChange}
                className='border rounded-md p-2'
              />
            </MDBValidationItem>

            <MDBValidationItem feedback='Please provide a message text.' invalid style={{ fontSize: '0.75rem' }}>
              <MDBTextArea
                label='Message'
                name='message'
                wrapperClass='mb-4'
                rows='4'
                required
                value={formData.message}
                onChange={handleChange}
                className='border rounded-md p-2'
              />
            </MDBValidationItem>

            <MDBBtn type='submit' value="Send" color='success' block className='my-4'>
              Send
            </MDBBtn>
          </MDBValidation>
        </div>
        <div className='w-full max-w-md ml-8'>
          <h3 className='text-xl font-semibold mb-2'>Get in Touch</h3>
          <p className='mb-4'>We would love to hear from you! Please fill out the form or reach us at:</p>
          <p className='mb-2'><strong>Email:</strong> octotechcreations@gmail.com</p>
          <p className='mb-2'>Our team is available Monday to Friday, 9 AM to 5 PM.</p>
        </div>
      </div>
      {/* Contact Us*/}

      {/* footer */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-muted"> 2024 Octotech Creations, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex" style={{ gap: '20px' }}>
            <a href="https://youtube.com/@octotechcreations?si=BngQEJFHngx3vtcx" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/octotech_creations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Home;