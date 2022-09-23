import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import PixivIcon from "./PixivIcon";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='fixed-bottom text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between mt-4 pb-2 border-bottom'>
        <MDBCol md="7" lg="7" xl="7" className='mx-auto'>
              <h6 className='text-uppercase fw-bold mb-4' align="center">
                Socials
              </h6>
              <p align="center">
                <div>
                  <a href='https://twitch.tv/pkae_2' className='me-4 text-reset'>
                    <i class="fab fa-twitch"></i>
                  </a>
                  <a href='https://twitter.com/pkae_2' className='me-4 text-reset'>
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
                  <a href='https://discord.gg/z3PzTsY68X' className='text-reset'>
                    <i class="fab fa-discord"></i>
                  </a>
                </div>
              </p>
            </MDBCol>
      </section>

      <section className=''>
        <MDBContainer className='text-md-start mt container-fluid'>
          <MDBRow className='mt-3'>
            <MDBCol className='mx-auto mb-4'>
              <h6 className='text-center text-uppercase fw-bold mb-1'>
                Pkae2 Illustrations LLC
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}