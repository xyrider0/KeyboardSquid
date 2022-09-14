import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import koba from './koba.png';
import cecilia from './cecilia.png';
import commissions from './CommissionsBanner.png';
// Standard size for png should be  3850x2525 pixels


export default function Carousel() {
  return (
      <MDBContainer className="mb-3 mt-3">
          <MDBCarousel showControls showIndicators className="col-lg-8 offset-lg-2 col-md-12 col-sm-10">
          <Link to='gallery'>
            <MDBCarouselItem
              className='w-100 d-sm-block'
              itemId={1}
              src={koba}
              alt='...'
            >
            </MDBCarouselItem>
          </Link>
          <Link to='commissions'>
            <MDBCarouselItem
              className='w-100 d-sm-block'
              itemId={2}
              src={commissions}
              alt='...'
            >
            </MDBCarouselItem>
          </Link>
          <Link to='merch'>
            <MDBCarouselItem
              className='w-100 d-sm-block'
              itemId={3}
              src={cecilia}
              alt='...'
            >
            </MDBCarouselItem>
          </Link>
          </MDBCarousel>
      </MDBContainer>
  );
}