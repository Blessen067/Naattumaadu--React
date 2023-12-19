import React from 'react';
import ContactForm from '../ContactFrom'

const Contactpage = () => {

    return (
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s3 section-title-s5">
                            <h2>Our Contacts</h2>
                        </div>
                        <div className="contact-details">
                           
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <h5>Location</h5>
                                    <p>Naattu The Native Food company Private Limited 53,
                                        Nehru Colony Mahalingapuram Pollachi
                                        Coimbatore Tamilnadu -642109</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <h5>Phone</h5>
                                    <p>+91 63 64 65 00 68</p>
                                    <p>+91 809 88 66 888</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <h5>Email</h5>
                                    <p>naattulife@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="contact-form-area">
                            <div className="section-title-s3 section-title-s5">
                                <h2>Quick Contact Form</h2>
                            </div>
                            <div className="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.820382089785!2d77.00865892091188!3d10.6710460378844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba83786532ce361%3A0x7b93ff64ec6b5da0!2sNehru%20Colony%2C%20Indra%20Nagar%2C%20Pollachi%2C%20Tamil%20Nadu%20642002!5e0!3m2!1sen!2sin!4v1702362428020!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
