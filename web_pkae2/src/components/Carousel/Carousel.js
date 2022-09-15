import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import merch from './MerchandiseBanner.png';
import commissions from './CommissionsBanner.png';
import gallery from './GalleryBanner.png';
// Standard size for png should be  3850x2525 pixels


export default function Carousel() {
  return (
      <MDBContainer className="mb-3 mt-3">
          <MDBCarousel showControls showIndicators className="col-lg-8 offset-lg-2">
          <Link to='gallery'>
            <MDBCarouselItem
              className='w-100 d-sm-block'
              itemId={1}
              src={gallery}
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
              src={merch}
              alt='...'
            >
            </MDBCarouselItem>
          </Link>
          </MDBCarousel>
      </MDBContainer>
  );
}