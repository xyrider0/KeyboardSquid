import React from 'react';
import {Link} from 'react-router-dom';
import styles from './FAQ.module.css';
import {MDBAccordion, MDBAccordionItem, MDBContainer, MDBRow, MDBTypography} from "mdb-react-ui-kit";


export default function FAQ() {
  return (
    <>
      <MDBTypography variant='h1' className={styles.title}>Frequently asked questions</MDBTypography>
      <MDBContainer className='container text-md-start container-fluid'>
        <MDBAccordion>
            <MDBAccordionItem collapseId={1} headerTitle='Will the keyboard design fade or chip over time?'>
            <MDBTypography className={styles.desc}>Our custom keyboard designs are created through a premium dye-sublimation process to maximize durability and design visuals.
            With proper use, dye sublimated keycaps can last a lifetime with minimal fading.
            </MDBTypography>
            </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </>
  );
}