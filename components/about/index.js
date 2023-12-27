import React from 'react';
import Link from 'next/link';

// import VideoModal from '../ModalVideo';

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <>
            <section className="about-section  ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-12 ">
                            {/* <div className="video-area">
                                <div className="video-holder">
                                    <VideoModal />
                                </div>000000
                            </div> */}
                            <img src="images/spoon.png" alt="" />
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="about-area">
                                <div className="about-wrap">
                                    <div className="about-title">
                                        <div className="bd-about__content-wrapper mb-60">
                                            <div className="bd-section__title-wrapper mb-40">
                                                {/* <span className="bd-sub__title">About Us</span> */}
                                                <h3 className="bd-section__title mt-5" style={{
                                                    fontSize: '100px',
                                                    lineHeight: '125px',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 600,
                                                    marginBottom: '60px',
                                                    fontFamily: '$heading-font-s3'
                                            }}
                                            >TASTE AND TRADITION</h3>
                                                <p style={{textAlign:"justify"}}>
                                                    In the heart of linguistic antiquity, within the enchanting folds
                                                    of the world's ancient tongue, Tamil, a profound concept emerges -
                                                    "Naattu." An expression that transcends mere words, "Naattu"
                                                    encapsulates the essence of native, indigenous, and the undying
                                                    spirit of tradition. It is a linguistic sanctuary where the echoes
                                                    of time-honored wisdom resonate, and where the primal "aadhi" or
                                                    originality is celebrated with unwavering reverence. <br /><br />

                                                    "NaattuLife," a name that resonates with this sacred resonance,
                                                    becomes the vessel through which the timeless heritage of "Naattu"
                                                    is breathed anew into the contemporary world. It stands as a beacon
                                                    of unwavering commitment to the preservation of nature's original
                                                    blueprint, where no genetic changes have marred the sanctity of
                                                    creation. In this sanctuary, "NaattuLife" takes root, and from its
                                                    nurturing embrace, emerges a plenty of products designed with a
                                                    singular purpose - to illuminate the path to a healthier life.
                                                    <br /><br />

                                                    With a dedication to the unadulterated and the authentic, it offers
                                                    the bounty of time-tested treasures, infused with the wisdom of
                                                    generations. It is here, in "NaattuLife," that the age-old promise
                                                    of wellness and vitality finds a modern expression, beckoning all
                                                    to embrace the heritage of their roots, and to partake in a life of
                                                    abundant health.
                                                </p>
                                            </div>
                                            <Link onClick={ClickHandler} href="/contact" className="btn theme-btn">
                                                Contact Us<i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
