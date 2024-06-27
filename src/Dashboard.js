import React from 'react'
import image1 from './images/Home-image.jpg'
const Dashboard = () => {
  return (
    
    <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
      <div id="demo" class="carousel slide" data-bs-ride="carousel">


        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>


        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} alt="Los Angeles" class="d-block w-100"></img>
          </div>
          <div class="carousel-item">
            <img src={image1} alt="Chicago" class="d-block w-100"></img>
          </div>
          <div class="carousel-item">
            <img src={image1} alt="New York" class="d-block w-100"></img>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>




      <div class="container-fluid p-5 bg-primary text-white text-center">
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
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>


        <div class="card img-fluid" style={{ width: '350px' }}>
          <img class="card-img-top" src={image1} alt="Card image" style={{ width: '100%' }}></img>
          <div class="card-body">
            <h4 class="card-title">Charan</h4>
            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#Mphasis" class="btn btn-primary">See Profile</a>
          </div>
        </div>


        <div class="card img-fluid" style={{ width: '350px' }}>
          <img class="card-img-top" src={image1} alt="Card image" style={{ width: '100%' }}></img>
          <div class="card-body">
            <h4 class="card-title">Darshan</h4>
            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#" class="btn btn-primary">See Profile</a>
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
            <a href="#" class="btn btn-success">Go SomeWhere</a>
          </div>
        </div>
      </div>

      <div class="card text-center">
  <div class="card-header">
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
              <ul style={{display:'inline-block', textAlign:'left',padding:'40px'}}> 
                <li >Basic Cutting</li>
                <li >Basic Transitions</li>
                <li >Audio Adjustment</li>
                <li >Colour Correction</li>
              </ul>
              <br></br>
              <a href="#" class="btn btn-primary" >See Profile</a>
            </div>
          </div>
          <h1>699/-</h1>
        </div>

        <div class="price-container">
        <div class="card img-fluid" style={{ width: '350px' }}>
          <div class="card-body">
            <h1 class="card-title bg-primary">Standard</h1>
            <ul style={{display:'inline-block', textAlign:'left',padding:'40px'}}> 
                <li >Colour Correction</li>
                <li >Colour Grading</li>
                <li >Motion Graphics</li>
                <li >Pro Transitions</li>
                <li >Subtitles</li>
                <li >Audio Enchancement</li>
                <li >Sound Effects</li>
              </ul><br></br>
            <a href="#Mphasis" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        <h1>999/-</h1>
        </div>

        <div class="price-container">
        <div class="card img-fluid" style={{ width: '350px' }}>
          <div class="card-body">
            <h1 class="card-title bg-warning">Premium</h1>
            <ul style={{display:'inline-block', textAlign:'left', padding:'40px'}}> 
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
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        <h1>1499/-</h1>
        </div>
        
      </div>

    </div>
  )
}

export default Dashboard