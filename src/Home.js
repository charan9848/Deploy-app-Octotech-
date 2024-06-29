import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './images/Home-image.jpg'
import { Typography, Box, Container, Grid } from '@mui/material';
import backgroundVideo from './images/back2.mp4';
import './Home.css';
import octotechlogo from './images/octotechlogo-modified.png';

const videoUrls = [
  {
    url: 'https://www.youtube.com/embed/U_aM5C83f3c',
    title: 'Video Editing',
    description: 'Description of Video 1',
  },
  {
    url: 'https://www.youtube.com/embed/NikcHaGHOSo',
    title: 'Reels',
    description: 'Description of Video 2',
  },
  {
    url: 'https://www.youtube.com/embed/i3J11Jto_tA',
    title: 'Titles',
    description: 'Description of Video 3',
  },
  {
    url: 'https://www.youtube.com/embed/H8N_A12-F-k',
    title: 'Short Film Trailer',
    description: 'Description of Video 4',
  },
];

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>This is the first slide!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1480688/pexels-photo-1480688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1480687/pexels-photo-1480687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1480689/pexels-photo-1480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
                <Typography variant="body1" textAlign="center" style={{ fontFamily: "'Cinzel Decorative', serif", fontWeight: "400", fontStyle: "normal", fontSize: "10px" }}>
                  At Octotech, we bring your vision to life with our expertise in video editing and visual effects. We create high-quality content that captivates and engages, perfect for social media ads, YouTube videos, Instagram reels, commercial promotions, and more.
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
          }}>
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

      <div class="container-fluid p-5 bg-secondary text-white text-center">
        <h1 id="Mphasis">Welcome To Octotech</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-4">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </div>
      </div>

      <div class="container mt-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

        <div class="card img-fluid" style={{ width: '350px' }}>
          <img class="card-img-top" src={image1} alt="Card image" style={{ width: '100%' }}></img>
          <div class="card-body">
            <h4 class="card-title">Firoz</h4>
            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="./login" class="btn btn-primary">See Profile</a>
          </div>
        </div>


        <div class="card img-fluid" style={{ width: '350px' }}>
          <img class="card-img-top" src={image1} alt="Card image" style={{ width: '100%' }}></img>
          <div class="card-body">
            <h4 class="card-title">Charan</h4>
            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="./login" class="btn btn-primary">See Profile</a>
          </div>
        </div>


        <div class="card img-fluid" style={{ width: '350px' }}>
          <img class="card-img-top" src={image1} alt="Card image" style={{ width: '100%' }}></img>
          <div class="card-body">
            <h4 class="card-title">Darshan</h4>
            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="./login" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row g-0 bg-body-light position-relative">
          <div class="col-md-6 mb-md-0 p-md-4">
            <img src={image1} class="w-100" alt="..." style={{ borderRadius: '20px' }} />
          </div>
          <div class="col-md-6 p-5 ps-md-5">
            <h5 class="mt-3">Columns with stretched link</h5>
            <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
            <a href="./login" class="btn btn-success">Go SomeWhere</a>
          </div>
        </div>
      </div>

      <div class="card text-center">
        <div class="card-header ">
          New Offer
        </div>
        <div class="card-body">
          <h5 class="card-title">Professional Reels/Shorts Editing</h5>
          <p class="card-text">Elevate your reels with our unbeatable edting packages</p> 
        </div>
      </div>

      <div class="container mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
        <div class="price-container">
          <div class="card img-fluid" style={{ width: '350px' }}>
            <div class="card-body">
              <h1 class="card-title bg-secondary">Basic</h1>
              <ul style={{ display: 'inline-block', textAlign: 'left', padding: '40px' }}> 
                <li >Basic Cutting</li>
                <li >Basic Transitions</li>
                <li >Audio Adjustment</li>
                <li >Colour Correction</li>
              </ul>
              <br></br>
              <a href="./login" class="btn btn-primary" >See Profile</a>
            </div>
            <h1>699/-</h1>
          </div>
        </div>

        <div class="price-container">
          <div class="card img-fluid" style={{ width: '350px' }}>
            <div class="card-body">
              <h1 class="card-title bg-primary">Standard</h1>
              <ul style={{ display: 'inline-block', textAlign: 'left', padding: '40px' }}> 
                <li >Colour Correction</li>
                <li >Colour Grading</li>
                <li >Motion Graphics</li>
                <li >Pro Transitions</li>
                <li >Subtitles</li>
                <li >Audio Enchancement</li>
                <li >Sound Effects</li>
              </ul><br></br>
              <a href="./login" class="btn btn-primary">See Profile</a>
            </div>
            <h1>999/-</h1>
          </div>
        </div>

        <div class="price-container">
          <div class="card img-fluid" style={{ width: '350px' }}>
            <div class="card-body">
              <h1 class="card-title bg-warning">Premium</h1>
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
              <a href="./login" class="btn btn-primary">See Profile</a>
            </div>
            <h1>1499/-</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
