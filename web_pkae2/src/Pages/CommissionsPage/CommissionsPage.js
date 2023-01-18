import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBTypography } from 'mdb-react-ui-kit';
import styles from './CommissionsPage.module.css';
import {importAll} from "../../Utils/utils";

const images = importAll(require.context('../../Assets/images', false, /\.(png|jpe?g|svg|gif)$/));
const videos = importAll(require.context('../../Assets/videos', false, /\.(mp4)$/));

export default function CommissionsPage() {
  return (
  <>
  <MDBTypography variant='h1' className='text-center mt-5'>Commissions</MDBTypography>
  <MDBTypography variant='h4' className='text-center mb-0'>Email: speaktopkae2@gmail.com</MDBTypography>
  <hr />
  <MDBTypography variant='h4' className='text-center mt-5'>Vtuber Art <br/> (Live2D Ready)</MDBTypography>
  <MDBContainer className='text-md-start mt container-fluid'>
      <MDBRow className='mt-3'>
          <MDBCol className='col-12'>
            <MDBRow>
            <MDBCol className='col-12 col-md-9'>
              <h5 className='text-center text-uppercase fw-bold mb-1'>
                  Full Body/Bust <br/>
                  $500/$300
              </h5>
              <MDBRow>
                <MDBCol className='col-12 col-md-6'>
                  <img src={images['vtuber_wolfy_fullbody.png']} className={styles.imageSample}/>
                </MDBCol>
                <MDBCol className='col-12 col-md-6'>
                  <img src={images['vtuber_pkae2_shading.png']} className={styles.imageSample}/>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className='col-12 col-md-3'>
              <h5 className='text-center text-uppercase fw-bold mb-1'>
                  Chibi <br/>
                  $150
              </h5>
              <img src={images['vtuber_leona.png']} className={styles.imageSample}/>
            </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className='mt-3'>
          <MDBCol className='col-12'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
              Rigging <br/>
          </h5>
            <MDBRow>
              <MDBCol className='col-12 col-md-6'>
              <h5 className='text-center text-uppercase fw-bold mb-1'>
                  Full Body/Bust <br/>
                  $500/$300
              </h5>
              <video controls className={styles.imageSample}>
                <source src={videos["vtuber_pkae2_wink.mp4"]} margin='auto' type="video/mp4"/>
              </video>              
              </MDBCol>
              <MDBCol className='col-12 col-md-6'>
              <h5 className='text-center text-uppercase fw-bold mb-1'>
                  Chibi <br/>
                  $150
              </h5>
              <video controls className={styles.imageSample}>
                <source src={videos["vtuber_leona.mp4"]} margin='auto' type="video/mp4"/>
              </video>
              </MDBCol>
            </MDBRow>
          </MDBCol>


      </MDBRow>
  </MDBContainer>
  <hr />
  <MDBTypography variant='h2' className='text-center mt-5'>Illustrations</MDBTypography>
  <MDBContainer className='container text-md-start container-fluid'>
      <MDBRow className='mt-3'>
          <MDBCol className='col-12 col-md-4'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
            Full/Half Body <br/> 
            (flat) <br/>
                $110/$70
          </h5>
          <img src={images['illust_kei_karuizawa.png']} className={styles.imageSample}>
          </img>
          <p className={styles.imageCaption}>Full Body (Flat) + Background (Flat) </p>
          </MDBCol>
          <MDBCol className='col-12 col-md-4'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
              Full/Half Body <br/>
              (rendered) <br/>
              $200/$125
          </h5>
          <img src={images['illust_yoimiya.png']} className={styles.imageSample}>
          </img>
          <p className={styles.imageCaption}>Half Body (Rendered) + Background (Rendered) </p>
          </MDBCol>
          <MDBCol className='col-12 col-md-4'>
          <h5 className='text-center text-uppercase fw-bold mb-1'>
            Full/Half Body <br/>
            Sketch <br/>
            $70/$50
          </h5>
          <div>
            <img src={images['illust_raven.png']} className={styles.imageSample}>
            </img>
          </div>
          <p className={styles.imageCaption}>Sketch + No Background</p>
          </MDBCol>
      </MDBRow>
  </MDBContainer>  
  <hr />
  <MDBTypography variant='h4' className='text-center mt-5'>Backgrounds</MDBTypography>
  <MDBContainer className='text-md-start mt container-fluid'>
        <MDBRow className='mt-3'>
            <MDBCol className='col-12 col-md-3'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Simple Shapes<br/>
              +$10
            </h5>
            <img src={images['illust_yuno_soccer.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Full Body (Flat) + Background (Simple)</p>
            </MDBCol>
            <MDBCol className='col-12 col-md-6'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Flat<br/>
              +$40
            </h5>
            <img src={images['illust_cecilia.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Half Body (Flat) + Background (Flat)</p>
            </MDBCol>
            <MDBCol className='col-12 col-md-3'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
              Rendered <br/>
              +$100
            </h5>
            <img src={images['illust_yoimiya.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Half Body (Rendered) + Background (Rendered)</p>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    <hr />
    <MDBTypography variant='h4' className='text-center mt-5'>Emotes</MDBTypography>
  <section className='com-illustration'>
    <MDBContainer className='text-md-start mt container-fluid'>
        <MDBRow className='mt-3'>
            <MDBCol className='col-12 col-md-3'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Animated <br/>
                Classic  <br/>
                $40      <br/>
            </h5>
            <img src={images['emote_buu_tap.gif']} className={styles.imageSample}/>
            <img src={images['emote_scarlett.gif']} className={styles.imageSample}/>
            </MDBCol>
            <MDBCol className='col-12 col-md-6'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Standard <br/>
                $30 per  <br/>
            </h5>
            <img src={images['emote_showcase.png']} className={styles.imageSample}/>
            </MDBCol>
            <MDBCol className='col-12 col-md-3'>
            <h5 className='text-center text-uppercase fw-bold mb-1'>
                Animated <br/>
                Live2D   <br/>
                $80      <br/>
            </h5>
            <img src={images['emote_glasses.gif']} className={styles.imageSample}/>
            <img src={images['emote_scarlett_cheer.gif']} className={styles.imageSample}/>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    </section>  
  <hr />
    <MDBTypography variant='h4' className='text-center mt-5'>Additional Samples</MDBTypography>
    <MDBContainer className='text-md-start mt container-fluid'>
        <MDBRow className='mt-3'>
            <MDBCol className='col-12 col-md-4'>
            <img src={images['illust_seda.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Half Body (Rendered) + Background (Rendered)</p>
            </MDBCol>
            <MDBCol className='col-12 col-md-4'>
            <img src={images['illust_ictwd_christmas.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Full Body (Flat) + Background (Flat)</p>
            </MDBCol>
            <MDBCol className='col-12 col-md-4'>
            <img src={images['illust_bemi.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Full Body (Flat) + No Background</p>
            </MDBCol>
        </MDBRow>
        <MDBRow className='mt-3'>
            <MDBCol className='col-12 col-md-4'>
            <img src={images['illust_king_shiki.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Half Body (Sketch) + No Background </p>
            </MDBCol>
            <MDBCol className='col-12 col-md-4'>
            <img src={images['illust_capt.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Full Body (Rendered) + No Background </p>
            </MDBCol>
            <MDBCol className='col-12 col-md-4'>
            <img src={images['illust_yuno.png']} className={styles.imageSample}>
            </img>
            <p className={styles.imageCaption}>Full Body (Flat) + No Background </p>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  <hr />
    <MDBTypography variant='h4' className='text-center mt-5'>
      Animation Services <br/> 
      (I animate your vtuber/illustration/emote) <br/> 
    </MDBTypography>
    <MDBTypography variant='h6' className='text-center mt-4'>
    Available on request, reach out to me at speaktopkae2@gmail.com
    </MDBTypography>
  <hr />
  </>

  )
}