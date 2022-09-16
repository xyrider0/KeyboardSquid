import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBTypography } from 'mdb-react-ui-kit';

export default function CommissionsPage() {
  return (
  <>
  <MDBTypography variant='h1' className='text-center mt-5'>Commissions</MDBTypography>
  <MDBTypography variant='h4' className='text-center mb-0'></MDBTypography>
  <hr />
  <MDBTypography variant='h4' className='text-center mt-5'>Illustrations</MDBTypography>
  <MDBTypography variant='p' className='text-center mb-2'>
    Exclusivity (no reprints) +$50.
  </MDBTypography>
  <MDBContainer className='text-md-start mt container-fluid'>
        <MDBRow className='mt-3'>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Sketch (Color) <br/>
              $20 ($30)
            </h5>
            </MDBCol>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Half/Full Body <br/>
                  $75/$100
            </h5>
            </MDBCol>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Character Sheet <br/>
                $300 (3 poses) + $75 each
            </h5>
            </MDBCol>
        </MDBRow>
    </MDBContainer>  
  <MDBTypography variant='h4' className='text-center mt-5'>Backgrounds</MDBTypography>
  <MDBTypography variant='p' className='text-center mb-2'>
  <MDBContainer className='text-md-start mt container-fluid'>
        <MDBRow className='mt-3'>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Simple <br/>
              +$10-30
            </h5>
            </MDBCol>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Wide Shot <br/>
              +$35-50
            </h5>
            </MDBCol>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Complex <br/>
              +$50-100
            </h5>
            </MDBCol>
        </MDBRow>
    </MDBContainer>  
  </MDBTypography>
  <hr />
  <MDBTypography variant='h4' className='text-center mt-5'>Vtubers</MDBTypography>
  <MDBContainer className='text-md-start mt container-fluid'>
      <MDBRow className='mt-3'>
          <MDBCol className='mx-auto mb-6'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
              Art <br/>
              Closed
          </h5>
          </MDBCol>
          <MDBCol className='mx-auto mb-6'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
              Rigging <br/>
              Closed
          </h5>
          </MDBCol>
      </MDBRow>
  </MDBContainer>
  <hr />
  <MDBTypography variant='h4' className='text-center mt-5'>Emotes</MDBTypography>
  <section className='com-illustration'>
    <MDBContainer className='text-md-start mt container-fluid'>
        <MDBRow className='mt-3'>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Standard <br/>
                $25 each
            </h5>
            </MDBCol>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Standard (5+) <br/>
                $20 each
            </h5>
            </MDBCol>
            <MDBCol className='mx-auto mb-4'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Animated <br/>
                $30-50 
            </h5>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    </section>  
  <hr />
  </>

  )
}