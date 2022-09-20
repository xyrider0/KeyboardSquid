import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBTypography } from 'mdb-react-ui-kit';
import styles from './CommissionsPage.module.css';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../Assets/images', false, /\.(png|jpe?g|svg|gif)$/));

export default function CommissionsPage() {
  return (
  <>
  <MDBTypography variant='h1' className='text-center mt-5'>Commissions</MDBTypography>
  <MDBTypography variant='h4' className='text-center mb-0'></MDBTypography>
  <hr />
  <MDBTypography variant='h2' className='text-center mt-5'>Illustrations</MDBTypography>
  <MDBTypography variant='p' className='text-center mb-2'>
    Exclusivity (*I don't sell additional prints) +$50.
  </MDBTypography>
  <MDBContainer className='container text-md-start container-fluid'>
      <MDBRow className='mt-3'>
          <MDBCol className='col-12 col-md-3'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
            Half/Full Body <br/>
                $75/$100
          </h5>
          <img src={images['illust_seda.png']} className={styles.imageSample}>
          </img>
          <p className={styles.imageCaption}>Half Body + Average Background</p>
          </MDBCol>
          <MDBCol className='col-12 col-md-6'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
              Character Sheet <br/>
              $300 (3 poses) + $75 each
          </h5>
          <img src={images['chara_sheet_mona.png']} className={styles.imageSample}>
          </img>
          <p className={styles.imageCaption}>Chara Sheet + Simple Background</p>
          </MDBCol>
          <MDBCol className='col-12 col-md-3'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
            Sketch (Color) <br/>
            $20 ($30)
          </h5>
          <div>
            <img src={images['sketch_eula.jpg']} className={styles.imageSample}>
            </img>
          </div>
          <p className={styles.imageCaption}>Sketch + No Background</p>
          </MDBCol>
      </MDBRow>
  </MDBContainer>  
  <MDBTypography variant='h4' className='text-center mt-5'>Backgrounds</MDBTypography>
  <MDBTypography variant='p' className='text-center mb-2'>
  <MDBContainer className='text-md-start mt container-fluid'>
        <MDBRow className='mt-3'>
            <MDBCol className='col-12 col-md-3'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Simple <br/>
              +$10-30
            </h5>
            <img src={images['sketch_koba.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Colored Sketch + Simple Background</p>
            </MDBCol>
            <MDBCol className='col-12 col-md-6'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Average <br/>
              +$35-50
            </h5>
            <img src={images['illust_cecilia.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Half Body + Average Background</p>
            </MDBCol>
            <MDBCol className='col-12 col-md-3'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Complex <br/>
              +$50-100
            </h5>
            <img src={images['illust_yoimiya.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Half Body + Complex Background</p>
            </MDBCol>
        </MDBRow>
    </MDBContainer>  
  </MDBTypography>
  <hr />
  <MDBTypography variant='h4' className='text-center mt-5'>Emotes</MDBTypography>
  <section className='com-illustration'>
    <MDBContainer className='text-md-start mt container-fluid'>
        <MDBRow className='mt-3'>
            <MDBCol className='col-12 col-md-3'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Standard <br/>
                $25 each
            </h5>
            <img src={images['emote_pkae2_love.png']} className={styles.imageSample}/>
            </MDBCol>
            <MDBCol className='col-12 col-md-6'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Standard (5+) <br/>
                $20 each
            </h5>
            <img src={images['emote_pkae2_pack.png']} className={styles.imageSample}/>
            </MDBCol>
            <MDBCol className='col-12 col-md-3'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Animated <br/>
                $30-50 
            </h5>
            <img src={images['emote_buu_tap.gif']} className={styles.imageSample}/>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    </section>  
  <hr />
  <MDBTypography variant='h4' className='text-center mt-5'>Vtubers (Closed)</MDBTypography>
  <MDBContainer className='text-md-start mt container-fluid'>
      <MDBRow className='mt-3'>
          <MDBCol className='col-12 col-md-6'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
              Art <br/>
          </h5>
            <MDBRow>
              <MDBCol className='col-12 col-md-6'>
              <h5 className='text-center text-uppercase fw-bold mb-1'>
                  Bust <br/>
              </h5>
              <img src={images['vtuber_mafuyu_bust.png']} className={styles.imageSample}/>
              </MDBCol>
              <MDBCol className='col-12 col-md-6'>
              <h5 className='text-center text-uppercase fw-bold mb-1'>
                  Full Body <br/>
              </h5>
              <img src={images['pkae2_flat_colors.png']} className={styles.imageSample}/>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol className='col-12 col-md-6'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
              Rigging <br/>
          </h5>
            <MDBRow>
              <MDBCol className='col-12 col-md-6'>
              <h5 className='text-center text-uppercase fw-bold mb-1'>
                  Bust <br/>
              </h5>
              </MDBCol>
              <MDBCol className='col-12 col-md-6'>
              <h5 className='text-center text-uppercase fw-bold mb-1'>
                  Full Body <br/>
              </h5>
              </MDBCol>
            </MDBRow>
          </MDBCol>


      </MDBRow>
  </MDBContainer>
  <hr />
  </>

  )
}