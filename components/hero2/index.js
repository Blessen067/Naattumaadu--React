import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import '../../styles/hero2.module.css'

const Hero2 = () => {

    var settings = {
        dots: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className="hero hero-style-2" style={{
            width: '100%', // Set the section width to 100%
            overflow: 'hidden', 
          }}
        >
            <div className="hero-slider">
                <div className="slide">
                    <div className="slide-inner" style={{
                        backgroundImage: `url('gh-p1.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover', // Use 'cover' to make the background image cover the entire container
                        marginBottom: "50px"
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="slide-caption">
                                    <div className="slide-title">
                                        <div className="bd-hero__content z-index-11" style={{}}>
                                            <span data-animation="fadeInUp" data-delay=".3s">Get everytime fresh assets</span>
                                            <h2 data-animation="fadeInUp" data-delay=".5s">fresh Ghee</h2>
                                        </div>
                                    </div>
                                    <div className="btns" style={{ marginBottom: "100px" }}>
                                        <Link href="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;