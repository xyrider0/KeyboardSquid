import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import PixivIcon from "./PixivIcon";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <MDBCol md="7" lg="7" xl="7" className='mx-auto'>
              <h6 className='text-uppercase fw-bold mb-4' align="center">
                Socials
              </h6>
              <p align="center">
                <div>
                  <a href='https://twitch.tv/pkae_2' className='me-4 text-reset'>
                    <i class="fab fa-twitch"></i>
                  </a>
                  <a href='https://twitter.com/2_pkae' className='me-4 text-reset'>
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href='https://www.pixiv.net/en/users/10313151' className='me-4 text-reset'>
                    <PixivIcon></PixivIcon>
                  </a>
                  <a href='https://www.instagram.com/pkae_2/' className='me-4 text-reset'>
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <SocialIcon url="https://www.tiktok.com/@pkae_2" bgColor="#6c757d" style={{ top: -3, height: 17, width: 17 }}/>
                  </a>
                  <a href='https://discord.gg/dgHa5Ttj' className='me-4 text-reset'>
                    <i class="fab fa-discord"></i>
                  </a>
                </div>
              </p>
            </MDBCol>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="5" lg="5" xl="5" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Pkae2 Illustrations
              </h6>
              <p>
                
              </p>
            </MDBCol>

            <MDBCol md="5" lg="5" xl="5" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              {/* <p>
                <MDBIcon icon="home" className="me-2" />
                CA, US
              </p> */}
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                speaktopkae2@gmail.com
              </p>
              {/* <p>
                <MDBIcon icon="phone" className="me-3" /> 
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      </div>
    </MDBFooter>
  );
}