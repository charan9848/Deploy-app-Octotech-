import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Typography, Box, Container, Grid } from '@mui/material';
import backgroundVideo from './images/back2.mp4'; // Update the path to your video
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
                  Welcome to <span style={{ color: "#ff4081", fontFamily: "'Bebas Neue', sans-serif" }}>Octotech</span> Video Editing and VFX Agency!
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
    </>
  );
}

export default Home;
