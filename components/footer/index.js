import React from 'react'
import Link from 'next/link'


const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="tp-site-footer">
            <div className="tp-upper-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12" >
                            <div className="widget about-widget">
                                <h3 style={{ color: 'white' }}>ABOUT US </h3>
                                <p>In the ancient folds of Tamil, emerges "Naattu" — more than words,
                                    it's the essence of native spirit, indigenous pride, and timeless tradition.
                                    A linguistic sanctuary where time-honored wisdom echoes,
                                    celebrating the primal "aadhi" with unwavering reverence.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.facebook.com/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://twitter.com/i/flow/login">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.instagram.com/accounts/login/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://accounts.google.com/AddSession/signinchooser?hl=en&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&theme=glif&flowName=GlifWebSignIn&flowEntry=AddSession">
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 " >
                            <div className=" link-widget">
                                <div className="">
                                    <h3 style={{ color: 'white' }}>Support </h3>
                                </div>

                                <ul className=''>

                                    <li><Link href='terms'>Terms and conditions</Link></li>
                                    <li><Link href='refund'>Refund Policy</Link></li>
                                    <li> <Link href='contact'>Contact Us</Link></li>
                                    <li> <Link href='privacy'>Privacy Policy</Link></li>
                                    <li> <Link href='shop'>Shipping</Link></li>
                                    <li> <Link href='/naattulife'>NaattuLife</Link></li>

                                </ul>

                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className=" link-widget">
                                <div className="me-4">
                                    <h3 style={{ color: 'white' }}>BUSINESS HOURS</h3>
                                </div>
                                <ul>
                                    <li>Mon - Fri</li>
                                    <li>10:00 am to 06:00 pm</li>
                                    <li>Saturday (1st & 4th)</li>
                                    <li>08:00 am to 04:00 pm</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>OUR PRODUCT</h3>
                                </div>
                                <p>Under the Indian sun, sacred cow's milk transforms into ghee.
                                    Cream, nurtured by sunlight, sours at room temperature, then chills at 4°C.
                                    In a copper pot over firewood, the butter sizzles and dances—an ancient alchemy,
                                    a symphony with the sun, creating liquid gold.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <Link href={'/'}>COPYRIGHT DESIGN BY ORANGE MEGA SOFTWARES - 2023 </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div />
        </footer>
    )
}

export default Footer;