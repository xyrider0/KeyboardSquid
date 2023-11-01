import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Instructions from '../../components/Instructions/Instructions';
import FAQ from '../../components/FAQ/FAQ';
import Testimonial from '../../components/Testimonial/Testimonial';
import styles from './HomePage.module.css';
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
export default function KeyboardPage(){
    return (
        <>
            <Carousel></Carousel>
            <Instructions></Instructions>
            <Testimonial></Testimonial>
            <FAQ></FAQ>
        </>
    );

};