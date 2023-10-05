import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import PixivIcon from "./PixivIcon";
import { SocialIcon } from 'react-social-icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='fixed-bottom text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-md-start mt container-fluid'>
          <MDBRow className='mt-3'>
            <MDBCol className='mx-auto'>
              <h6 className={styles.footer + ' text-center text-uppercase fw-bold mb-1'}>
                Pkae2 Illustrations LLC
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBCol md="7" lg="7" xl="7" className='mx-auto'>
              <div align="center">
                  <a href='https://twitch.tv/pkae_2' className={styles.footer + ' me-4 text-reset'}>
                    <i className="fab fa-twitch"></i>
                  </a>
                  <a href='https://twitter.com/pkae_2' className={styles.footer + ' me-4 text-reset'}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href='https://www.pixiv.net/en/users/10313151' className={styles.footer + ' me-4 text-reset'}>
                    <PixivIcon></PixivIcon>
                  </a>
                  <a href='https://www.instagram.com/pkae_2/' className={styles.footer + ' me-4 text-reset'}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <SocialIcon url="https://www.tiktok.com/@pkae_2" bgColor="#6c757d" style={{ top: -1.7, height: 12, width: 12 }} className={styles.footer + ' me-4 text-reset'}/>
                  <a href='https://discord.gg/z3PzTsY68X' className={styles.footer + ' text-reset'}>
                    <i className="fab fa-discord"></i>
                  </a>
              </div>
            </MDBCol>
      </section>
    </MDBFooter>
  );
}