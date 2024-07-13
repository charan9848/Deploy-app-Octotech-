import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Akash from './images/Akash.jpg'
import Charan from './images/Charan.jpeg'
import Raghu from './images/Raghu.jpg'
import Avatar from '@mui/material/Avatar';
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

const profiles = [
  {
    name: "Akash",
    img: Akash,
    description: `A skilled video editor with years of specialized expertise in
      video editing using Premiere Pro and After Effects. I specialize
      in crafting high-quality content for social media ads, YouTube
      videos, Instagram reels, commercial business promotions, and more.`,
    contact: "+91 96529 83774",
    experience: "3 Years Experience",
  },
  {
    name: "Raghu",
    img: Raghu,
    description: `An experienced graphic designer with a passion for creating
      visually stunning designs. My expertise lies in using Adobe Photoshop
      and Illustrator to bring ideas to life.`,
    contact: "+91 88865 29625",
    experience: "4 Years Experience",
  },
];

const raviProfile = {
  name: "Gannoj Bhanu Charan",
  img: Charan,
  description: `A dedicated software developer with a focus on front-end development
    using React.js and Material-UI. I enjoy building responsive and dynamic
    user interfaces.`,
  contact: "+91 9848728321",
  experience: "1 Years Experience",
};


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

      <div class="container-fluid p-5 bg-primary text-white text-center">
        <h1 id="Mphasis">Welcome To Octotech</h1>
        <p>Here Some Templates are Available.</p>
      </div>


      <div class="container mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px' }}>
        <div class="Templates">
          <div class="card img-fluid" style={{ width: '350px' }}>
            <img class="card-img-top" src='https://seemymarriage.com/wp-content/uploads/2023/02/Theme-Krishna-1st-Birthday-Invitation-Video-Peacock-feathers-445x250.png' alt="Card image" style={{ width: '100%' }}></img>
            <div class="card-body">
              <h4 class="card-title">Birthday Invitation Video Templates</h4>
              <p class="card-text">Here are some birthday templates available for you to choose from. Click on the button below to explore and select your preferred template:</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>

        <div class="Templates">
          <div class="card img-fluid" style={{ width: '350px' }}>
            <img class="card-img-top" src='https://resource.flexclip.com/templates/cover/w400/indian-wedding-invitation.webp?v=1' alt="Card image" style={{ width: '100%' }}></img>
            <div class="card-body">
              <h4 class="card-title">Wedding Invitations Video Templates</h4>
              <p class="card-text">Explore our collection of wedding templates designed to capture the love and romance of your special day. Click below to choose your perfect wedding template:</p>
              <a href="#Mphasis" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>

        <div class="Templates">
          <div class="card img-fluid" style={{ width: '350px' }}>
            <img class="card-img-top" src='https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/6ac579326764518f0e0352d75063a5d433f7c0a21696071512.jpg' alt="Card image" style={{ width: '100%' }}></img>
            <div class="card-body">
              <h4 class="card-title">Engagement Invitation Templates</h4>
              <p class="card-text">Capture the excitement and romance of your engagement with our selection of templates. Click below to browse and select your ideal engagement template:</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>
      </div>


      <div class="container mt-5">
        <div class="row g-0 bg-body-light position-relative">
          <div class="col-md-6 mb-md-0 p-md-4">
            <img src='https://www.videoconverterfactory.com/tips/imgs-self/best-vfx-software/best-vfx-software-1.jpg' class="w-100" alt="..." style={{ borderRadius: '20px' }} />
          </div>
          <div class="col-md-6 p-5 ps-md-5">
            <h5 class="mt-3">Short Film Editing Available</h5>
            <p>Transform your vision into captivating narratives with our professional editing. From narrative shorts to promotional videos, we specialize in creative transitions and impactful visual effects. Contact us today to enhance your storytelling journey.</p>
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

      <div class="container mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center', gap: '30px' }}>
        <div class="price-container">
          <div class="card img-fluid" style={{ width: '350px' }}>
            <div class="card-body">
              <h1 class="card-title bg-secondary rounded-pill">Basic</h1>
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
              <h1 class="card-title bg-primary rounded-pill">Standard</h1>
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
              <h1 class="card-title bg-warning rounded-pill">Premium</h1>
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


      <br />
      <br />

      <div class="card text-center">
      <div class="card-header ">
          ABOUT US
        </div>
        <div class="card-body">
          <h5 class="card-title"><p><em>Meet Our VFX Artist!</em></p></h5>
          <p class="card-text">Transforming imagination into reality with breathtaking visual effects. Explore our artist's portfolio to see the magic of VFX come to life.</p>
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
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ fontStyle: "italic", fontSize: "0.65rem" }}
                    >
                      Contact - {profile.contact}
                    </Typography>
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
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ fontStyle: "italic", fontSize: "0.65rem" }}
                  >
                    - {raviProfile.contact}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

        </div>





      </div>






      {/* footer */}
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg class="bi" width="30" height="24"></svg>
            </a>
            <span class="mb-3 mb-md-0 text-muted">© 2024 Octotech Creations, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex" style={{ gap: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </ul>
        </footer>
      </div>





    </>
  );
}

export default Home;
