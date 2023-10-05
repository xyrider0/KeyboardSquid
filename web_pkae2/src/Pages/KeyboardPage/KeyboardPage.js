import React from 'react';
import styles from './KeyboardPage.module.css';
import 'mdb-react-ui-kit';

export default function KeyboardPage(){
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg" className="d-block w-100" alt="Wild Landscape"/>
                <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.4)"}}></div>
                <div className="carousel-caption d-none d-sm-block mb-5">
                    <h1 className="mb-4">
                            <strong>Design Custom Keyboards</strong>
                        </h1>

                        <p>
                            <strong>Upload your own image</strong>
                        </p>

                        <p className="mb-4 d-none d-md-block">
                            <strong>The most comprehensive tutorial for the Bootstrap 5. Loved by over 3 000 000 users. Video and written versions
                            available. Create your own, stunning website.</strong>
                        </p>

                        <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" className="btn btn-outline-white btn-lg">
                            Start free tutorial
                            <i className="fas fa-graduation-cap ms-2"></i>
                        </a>
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
                <div className="row">

                <div className="col-md-4 mb-4">
                    <div className="card">
                    <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        className="w-100" />
                        <a href="#!">
                        <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                            <h5><span className="badge bg-dark ms-2">NEW</span></h5>
                            </div>
                        </div>
                        <div className="hover-overlay">
                            <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                        </div>
                        </a>
                    </div>
                    <div className="card-body">
                        <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Denim shirt</h5>
                        </a>
                        <a href="" className="text-reset ">
                        <p>Shirt</p>
                        </a>
                        <h6 className="mb-3 price">120$</h6>
                    </div>
                    </div>
                </div>
                </div>
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