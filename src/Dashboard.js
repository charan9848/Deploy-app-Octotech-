import React from 'react'
import './Dashboard.css'
import image1 from './images/Home-image.jpg'
import background from './images/background2.jpg'

const Dashboard = () => {
  return (

    <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
      {/* break */}
      <section className="hero fade-in" style={{ backgroundImage: `url(${background})` }}>
        <div className="content">
          <h1>Welcome To Octotech.</h1>
          <p>Get Resources from octotech team, We are going to help you.</p>
          <a href="./Apply" className="apply-button">Apply here</a>
        </div>
      </section>

      {/* break */}




      <div className="container mt-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px' }}>
       <div className="Templates">
        <div className="card img-fluid shadow-lg" style={{ width: '350px', borderRadius: '15px', overflow: 'hidden' }}>
          <img className="card-img-top" src='https://seemymarriage.com/wp-content/uploads/2023/02/Theme-Krishna-1st-Birthday-Invitation-Video-Peacock-feathers-445x250.png' alt="Card image" style={{ width: '100%', height: '200px', objectFit: 'cover' }}></img>
          <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
            <h4 className="card-title fw-bold">Birthday Invitation Video Templates</h4>
            <p className="card-text">Here are some birthday templates available for you to choose from. Click on the button below to explore and select your preferred template:</p>
            <a href="*" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        </div>

        <div className="Templates">
        <div className="card img-fluid shadow-lg" style={{ width: '350px', borderRadius: '15px', overflow: 'hidden' }}>
          <img className="card-img-top" src='https://resource.flexclip.com/templates/cover/w400/indian-wedding-invitation.webp?v=1' alt="Card image" style={{ width: '100%', height: '200px', objectFit: 'cover' }}></img>
          <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
            <h4 className="card-title fw-bold">Wedding Invitations Video Templates</h4>
            <p className="card-text">Explore our collection of wedding templates designed to capture the love and romance of your special day. Click below to choose your perfect wedding template:</p>
            <a href="*" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        </div>

        <div className="Templates">
        <div className="card img-fluid shadow-lg" style={{ width: '350px', borderRadius: '15px', overflow: 'hidden' }}>
          <img className="card-img-top" src='https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/6ac579326764518f0e0352d75063a5d433f7c0a21696071512.jpg' alt="Card image" style={{ width: '100%', height: '200px', objectFit: 'cover' }}></img>
          <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
            <h4 className="card-title fw-bold">Engagement Invitation Templates</h4>
            <p className="card-text">Capture the excitement and romance of your engagement with our selection of templates. Click below to browse and select your ideal engagement template:</p>
            <a href="*" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row g-0 bg-body-light position-relative rounded-3 shadow-lg p-4">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src='https://www.videoconverterfactory.com/tips/imgs-self/best-vfx-software/best-vfx-software-1.jpg' className="w-100 rounded-3" alt="Short Film Editing" style={{ objectFit: 'cover', height: '100%', borderRadius: '15px' }} />
          </div>
          <div className="col-md-6 p-5 ps-md-5 d-flex flex-column justify-content-center">
            <h5 className="mt-3 fw-bold">Short Film Editing Available</h5>
            <p className="text-muted">Transform your vision into captivating narratives with our professional editing. From narrative shorts to promotional videos, we specialize in creative transitions and impactful visual effects. Contact us today to enhance your storytelling journey.</p>
            <a href="*" className="btn btn-success mt-3">Get Started</a>
          </div>
        </div>
      </div>

      <div className="card text-center shadow-lg mb-4">
        <div className="card-header bg-primary text-white">
          New Offer
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">Professional Reels/Shorts Editing</h5>
          <p className="card-text">Elevate your reels with our unbeatable editing packages.</p>
        </div>
      </div>

      <div className="container mt-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center', gap: '30px' }}>
        <div className="price-container">
          <div className="card img-fluid shadow-lg" style={{ width: '350px', borderRadius: '15px' }}>
            <div className="card-body">
              <h1 className="card-title bg-secondary rounded-pill text-white">Basic</h1>
              <ul style={{ display: 'inline-block', textAlign: 'left', padding: '20px' }}>
                <li>Basic Cutting</li>
                <li>Basic Transitions</li>
                <li>Audio Adjustment</li>
                <li>Colour Correction</li>
              </ul><br></br>
              <a href="./apply" className="btn btn-success mt-3">See Profile</a>
            </div>
            <h1 className="text-center">699/-</h1>
          </div>
        </div>

        <div className="price-container">
          <div className="card img-fluid shadow-lg" style={{ width: '350px', borderRadius: '15px' }}>
            <div className="card-body">
              <h1 className="card-title bg-primary rounded-pill text-white">Standard</h1>
              <ul style={{ display: 'inline-block', textAlign: 'left', padding: '20px' }}>
                <li>Colour Correction</li>
                <li>Colour Grading</li>
                <li>Motion Graphics</li>
                <li>Pro Transitions</li>
                <li>Subtitles</li>
                <li>Audio Enhancement</li>
                <li>Sound Effects</li>
              </ul>
              <a href="./apply" className="btn btn-success mt-3">See Profile</a>
            </div>
            <h1 className="text-center">999/-</h1>
          </div>
        </div>

        <div className="price-container">
          <div className="card img-fluid shadow-lg" style={{ width: '350px', borderRadius: '15px' }}>
            <div className="card-body">
              <h1 className="card-title bg-warning rounded-pill text-dark">Premium</h1>
              <ul style={{ display: 'inline-block', textAlign: 'left', padding: '20px' }}>
                <li>Visual Effects</li>
                <li>Text Animation</li>
                <li>Colour Correction</li>
                <li>Colour Grading</li>
                <li>Motion Graphics</li>
                <li>Pro Transitions</li>
                <li>Subtitles</li>
                <li>Audio Enhancement</li>
                <li>Sound Effects</li>
              </ul>
              <a href="./apply" className="btn btn-success mt-3">See Profile</a>
            </div>
            <h1 className="text-center">1499/-</h1>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-muted"> 2022 Octotech Creations, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex" style={{ gap: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </ul>
        </footer>
      </div>

    </div>
  )
}

export default Dashboard