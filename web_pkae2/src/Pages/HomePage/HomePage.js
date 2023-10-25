import React from 'react';
import styles from './HomePage.module.css';
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
export default function KeyboardPage(){
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg" className="d-block w-100" alt="Wild Landscape"/>
                <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.4)"}}></div>
                <div className="carousel-caption d-none d-sm-block mb-5">
                    <h1 className="mb-4">
                            <strong>One Stop for Custom Keyboard Design Solutions</strong>
                        </h1>

                        <Link to="/Merch" className="btn btn-outline-white btn-lg">
                            Upload Your Design Now!
                        </Link>
                </div>
            </div>

            {/* <!--Main layout--> */}
            <main>
            <div className="container">
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2" style={{"backgroundColor": "#607D8B"}}>
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid">

                {/* <!-- Navbar brand --> */}
                <a className="navbar-brand" href="#">Categories:</a>

                {/* <!-- Toggle button --> */}
                <button 
                className="navbar-toggler" 
                type="button" 
                data-mdb-toggle="collapse" 
                data-mdb-target="#navbarSupportedContent2" 
                aria-controls="navbarSupportedContent2" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>

                {/* <!-- Collapsible wrapper --> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    {/* <!-- Link --> */}
                    <li className="nav-item acitve">
                    <a className="nav-link text-white" href="#">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Shirts</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Sport wears</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Outwears</a>
                        </li>

                </ul>

                {/* <!-- Search --> */}
                <form className="w-auto py-1" style={{"maxWidth": "12rem"}}>
                    <input type="search" className="form-control rounded-0" placeholder="Search" aria-label="Search"/>
                </form>

                </div>
            </div>
            {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
            
            {/* <!-- Products --> */}
            <section>
            <div className="text-center">

            </div>
            </section>
            
            {/* <!-- Pagination --> */}
            <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
            <ul className="pagination">
                <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>  
            {/* <!-- Pagination -->   */}
            </div>
            </main>
            {/* <!--Main layout--> */}

            <footer className="text-center text-white mt-4" style={{"backgroundColor": "#607D8B"}}>
            
            {/* <!--Call to action--> */}
                <div className="pt-4 pb-2">
                <a className="btn btn-outline-white footer-cta mx-2" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" role="button">Download MDB
                    <i className="fas fa-download ms-2"></i>
                </a>
                <a className="btn btn-outline-white footer-cta mx-2" href="https://mdbootstrap.com/education/bootstrap/" target="_blank" role="button">Start free tutorial
                    <i className="fas fa-graduation-cap ms-2"></i>
                </a>
                </div>
                {/* <!--/.Call to action--> */}
            
            <hr className="text-dark"/>
            
            <div className="container">
                {/* <!-- Section: Social media --> */}
                <section className="mb-3">
                
                {/* <!-- Facebook --> */}
                <a
                    className="btn-link btn-floating btn-lg text-white"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-facebook-f"></i
                ></a>

                {/* <!-- Twitter --> */}
                <a
                    className="btn-link btn-floating btn-lg text-white"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i
                ></a>

                {/* <!-- Google --> */}
                <a
                    className="btn-link btn-floating btn-lg text-white"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"></i
                ></a>

                {/* <!-- Instagram --> */}
                <a
                    className="btn-link btn-floating btn-lg text-white"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i
                ></a>

                {/* <!-- YouTube --> */}
                <a
                    className="btn-link btn-floating btn-lg text-white"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-youtube"></i
                ></a>
                {/* <!-- Github --> */}
                <a
                    className="btn-link btn-floating btn-lg text-white"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i
                ></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)", "textColor": "#E0E0E0"}}>
                © 2022 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* <!-- Copyright --> */}
            </footer>
        </>
    );

};