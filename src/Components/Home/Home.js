import React from 'react'
import './Home.css';
function Home() {
    return (
        <div id='home'>
        <div className='home-cover'></div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/college1.jpg" class="d-block w-100" alt="..." />
                </div>
                {/* <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div> */}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='home-content-container'>
        <div className='home-content'>
            <h4>विद्ययामृतमश्नुते</h4>
            <h1>Training and Placement Cell</h1>
            <h2>IIIT BHOPAL</h2>
        </div>
        </div>
        </div>
    )
}

export default Home