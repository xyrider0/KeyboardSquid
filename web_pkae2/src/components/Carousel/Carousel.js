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
          <MDBCarousel showControls showIndicators className="col-m-8 offset-m-2">
          <Link to='gallery'>
            <MDBCarouselItem
              className='w-100 d-sm-block'
              itemId={1}
              src={gallery}
              alt='...'
            >
            </MDBCarouselItem>
          </Link>

          </MDBCarousel>
      </MDBContainer>
  );
}