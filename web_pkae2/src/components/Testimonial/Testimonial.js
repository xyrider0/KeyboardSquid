import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Testimonial.module.css';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
export default function Testimonial() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className={styles.testimonialCard}
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
      >
        <MDBRow className="d-flex justify-content-center mt-5">
          <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
          alt="avatar"
          className={styles.avatar + " rounded-circle shadow-1-strong mb-4"}
          />
          <br></br>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol lg="8">
            <h5 className="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p className="text">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              et deleniti nesciunt sint eligendi reprehenderit reiciendis,
              quibusdam illo, beatae quia fugit consequatur laudantium velit
              magnam error. Consectetur distinctio fugit doloremque.
            </p>
          </MDBCol>
        </MDBRow>
        <ul className="d-flex list-unstyled justify-content-center text-warning mb-0">
          <li>
            <MDBIcon fas icon="star" size="sm" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" />
          </li>
          <li>
            <MDBIcon far icon="star" size="sm" />
          </li>
        </ul>
      </MDBCarouselItem>

    </MDBCarousel>
  );
}