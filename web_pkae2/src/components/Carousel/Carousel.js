import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
} from 'mdb-react-ui-kit';
import yoimiya from './yoimiya.png';
import koba from './koba.png';
import cecilia from './cecilia.png';
import './Carousel.css';
// Standard size for png should be  3850x2525 pixels


export default function Carousel() {
  return (
      <MDBContainer className="mb-3 mt-3">
          <MDBCarousel showControls showIndicators className="col-lg-8 offset-lg-2 col-md-12">
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={koba}
              alt='...'
            >
              <h1>
                Gallery <br/> (WIP)
              </h1>
            </MDBCarouselItem>
            <MDBCarouselItem
              className='w-100 d-block dark'
              itemId={2}
              src={yoimiya}
              alt='...'
            >
              <h1> Commissions <br/> (WIP)</h1>
            </MDBCarouselItem>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={3}
              src={cecilia}
              alt='...'
            >
              <h1> Merch <br/> (WIP)</h1>
            </MDBCarouselItem>
          </MDBCarousel>
      </MDBContainer>
  );
}