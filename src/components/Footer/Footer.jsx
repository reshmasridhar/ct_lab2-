import React from 'react';
import logo from "../../assets/images/vrslogo2.png";

const Footer = () => {
    return (
        <footer  className='d-flex flex-column flex-sm-row justify-content-between page-container p-5'>
            <div className="footer-left pt-2">
              
                <footer className="footer-section">
                <style>
                {`
                    ul {
                        margin: 0px;
                        padding: 0px;
                    }
                    .footer-section {
                        
                        position: relative;
                    }
                    .footer-cta {
                        border-bottom: 1px solid #373636;
                    }
                    .single-cta i {
                        color: #5B0577;
                        font-size: 30px;
                        float: left;
                        margin-top: 8px;
                    }
                    .cta-text {
                        padding-left: 15px;
                        display: inline-block;
                    }
                    .cta-text h4 {
                        color: #5b0577;
                        font-size: 20px;
                        font-weight: 600;
                        margin-bottom: 2px;
                    }
                    .cta-text span {
                        color: #757575;
                        font-size: 15px;
                    }
                    .footer-content {
                        position: relative;
                        z-index: 2;
                    }
                    .footer-pattern img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 330px;
                        background-size: cover;
                        background-position: 100% 100%;
                    }
                    .footer-logo {
                        margin-bottom: 30px;
                    }
                    .footer-logo img {
                        max-width: 200px;
                    }
                    .footer-text p {
                        margin: 14px 0;
                        font-size: 14px;
                        color: #7e7e7e;
                        line-height: 28px;
                    }
                    .footer-social-icon span {
                        color: #fff;
                        display: block;
                        font-size: 20px;
                        font-weight: 700;
                        font-family: 'Poppins', sans-serif;
                        margin-bottom: 20px;
                    }
                    .footer-social-icon a {
                        color: #fff;
                        font-size: 16px;
                        margin-right: 15px;
                    }
                    .footer-social-icon i {
                        height: 40px;
                        width: 40px;
                        text-align: center;
                        line-height: 38px;
                        border-radius: 50%;
                    }
                    .facebook-bg {
                        background: #3B5998;
                    }
                    .twitter-bg {
                        background: #55ACEE;
                    }
                    .google-bg {
                        background: #DD4B39;
                    }
                    .footer-widget-heading h3 {
                        color: #fff;
                        font-size: 20px;
                        font-weight: 600;
                        margin-bottom: 40px;
                        position: relative;
                    }
                    .footer-widget-heading h3::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: -15px;
                        height: 2px;
                        width: 50px;
                        background: #5B0577;
                    }
                    .footer-widget ul li {
                        display: inline-block;
                        float: left;
                        width: 50%;
                        margin-bottom: 12px;
                    }
                    .footer-widget ul li a:hover {
                        color: #5B0577;
                    }
                    .footer-widget ul li a {
                        color: #878787;
                        text-transform: capitalize;
                    }
                    .subscribe-form {
                        position: relative;
                        overflow: hidden;
                    }
                    .subscribe-form input {
                        width: 100%;
                        padding: 14px 28px;
                        
                        border: 1px solid #2E2E2E;
                        color: #000000;
                    }
                    .subscribe-form button {
                        position: absolute;
                        right: 0;
                        background: #5B0577;
                        padding: 13px 20px;
                        
                        top: 0;
                    }
                    .subscribe-form button i {
                        color: #fff;
                        font-size: 22px;
                        transform: rotate(-6deg);
                    }
                    .copyright-area {
                        background: #202020;
                        padding: 25px 0;
                    }
                    .copyright-text p {
                        margin: 0;
                        font-size: 14px;
                        color: #878787;
                    }
                    .copyright-text p a {
                        color: #ff5e14;
                    }
                    .footer-menu li {
                        display: inline-block;
                        margin-left: 20px;
                    }
                    .footer-menu li:hover a {
                        color: #5B0577;
                    }
                    .footer-menu li a {
                        font-size: 14px;
                        color: #878787;
                    }
                `}
            </style>
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>1010 Avenue, sw 54321, chandigarh</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                <img src={logo} alt="Logo"  />
                                   
                                </div>
                                <div className="footer-text">
                                   <p>The latest jewellery brands and timeless diamond elegance - for every occasion. Jewellery is our passion, and we love helping you choose meaningful gifts or stunning jewellery for any event or milestone in your life.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">about</a></li>
                                    <li><a href="/">services</a></li>
                                    <li><a href="/">portfolio</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Our Services</a></li>
                                    <li><a href="/">Expert Team</a></li>
                                    <li><a href="/">Contact us</a></li>
                                    <li><a href="/">Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
            </div>
            <div className="footer-right pt-2">
                <span className='pe-1 text-white'></span>
                <span className='fw-bold' style={{ color: "#78909c", cursor: "pointer" }} onClick={() => { window.open("https://github.com/Anrsgrl") }}></span>
            </div>
        </footer>
    )
}

export default Footer;