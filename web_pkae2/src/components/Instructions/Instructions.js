import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Instructions.module.css';
import {MDBCol, MDBContainer, MDBRow, MDBTypography} from "mdb-react-ui-kit";


export default function Instructions() {
  return (
    <>
      <MDBTypography variant='h1' className={styles.title}>A custom gift for all ages</MDBTypography>
      {/* <select value={filter} onChange={handleFilter}>
        <option value="+pop">Recommended</option>
        <option value="-date">Oldest</option>
        <option value="+date">Newest</option>
      </select> */}
      <MDBContainer className='container text-md-start container-fluid'>
            <ol>
            <MDBRow className='mt-3'>
                <MDBTypography tag='li' variant='h3' className={styles.item}>Upload your design (PNG)</MDBTypography>
                <MDBTypography className={styles.desc}> Whether you want to gaze at a beautiful photograph, artwork
                or a personalized design, our custom keyboard prints are a <Link to="/Merch">PNG upload</Link>  away from adding a splash of color to 
                your workspace! 
                </MDBTypography>  
            </MDBRow>       

            <MDBRow className='mt-3'>
                <MDBTypography tag='li' variant='h3' className={styles.item}>Choose your keyboard size</MDBTypography>
                <MDBTypography className={styles.desc}> Combine form and functionality with a broad selection of keyboard layouts. 
                Choose between your traditional full keyboard size and smaller layouts for the perfect fit! </MDBTypography>
            </MDBRow>

            <MDBRow className='mt-3'>
                <MDBTypography tag='li' variant='h3' className={styles.item}>Preview and customize your design</MDBTypography>
                <MDBTypography className={styles.desc}>Use our keyboard preview and customization tools
                to tweak the look of your keyboard until you're fully satisfied!</MDBTypography>
            </MDBRow>
          </ol>
      </MDBContainer>
    </>
  );
}