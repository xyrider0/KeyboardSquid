import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [showNavLeft, setShowNavLeft] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarLeftAlignExample'
          aria-controls='navbarLeftAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavLeft(!showNavLeft)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavLeft}>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink className={styles.navbar + ' me-4'} tag={Link} aria-current='page' to='/'>
                  Home 
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className={styles.navbar  + ' me-4'}  tag={Link} aria-current='page' to='gallery'>
                  Gallery 
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className={styles.navbar  + ' me-4'} tag={Link} aria-current='page' to='commissions'>
                  Commissions 
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className={styles.navbar + ' me-4'} tag={Link} aria-current='page' to='merch'>
                  Merch 
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}