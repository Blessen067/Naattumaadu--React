import React from "react";
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="hero hero-style-1"  style={{display:'none'}}>
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-5 slide-caption">
                                <div className="slide-title">
                                    <h5>Welcome to NaattuLife</h5>
                                    <h2>MILK PROCESS</h2>
                                    <p>Dairy producers worldwide
                                        face similar challenges around animal welfare, farm
                                        profitability, food safety and work efficiency.</p>
                                </div>
                                <div className="d-flex">
                                    <div className="btns">
                                        <Link href="/shop" className="btn theme-btn">OUR PRODUCTS <i className="fa fa-angle-double-right"></i></Link>
                                    </div>
                                    <div className="btns ms-3">
                                        <Link href="/shop" className="btn theme-btn">ABOUT US   <i className="fa fa-angle-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="right-image">
                        <div className="simg-1"><img src='/images/slider/img-1.png' alt="slide-img" /></div>
                        <div className="simg-2"><img src='/images/slider/img-2.png' alt="slide-img" /></div>
                    </div> 
                    <div className="hero-shape-img"></div> 
                </div>
            </div>
        </section>
    )
}

export default Hero;