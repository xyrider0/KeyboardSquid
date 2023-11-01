import React from 'react';
import {Link} from 'react-router-dom';
// Standard size for png should be  3850x2525 pixels


export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-mdb-ride="carousel">
      <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg" className="d-block w-100" alt="Wild Landscape"/>
      <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.4)"}}></div>
        <div className="carousel-caption d-none d-sm-block mb-5">
            <h1 className="mb-4">
                    <strong>One Stop for Custom Keyboard Design Solutions</strong>
                </h1>

                <Link to="/Merch" className="btn btn-outline-white btn-lg">
                    Upload Your Design Now!
                </Link>
        </div>
    </div>
  );
}