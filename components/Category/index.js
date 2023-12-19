import React from 'react'
import Link from 'next/link'


const Category = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="category-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="category-wrap">
                            <div className="category-title">
                                {/* <h6>About Us</h6  > */}
                                <h2>NAATTULIFE</h2>
                                <p class="bd-section__paragraph">In the heart of linguistic antiquity, within the enchanting
                                    folds of the world's ancient tongue, Tamil, a profound concept emerges - "Naattu." An
                                    expression that transcends mere words, "Naattu" encapsulates the essence of native,
                                    indigenous, and the undying spirit of tradition. It is a linguistic sanctuary where the
                                    echoes of time-honored wisdom resonate, and where the primal "aadhi" or originality is
                                    celebrated with unwavering reverence. <br /><br />

                                    "NaattuLife," a name that resonates with this sacred resonance, becomes the vessel through
                                    which the timeless heritage of "Naattu" is breathed anew into the contemporary world. It
                                    stands as a beacon of unwavering commitment to the preservation of nature's original
                                    blueprint, where no genetic changes have marred the sanctity of creation. In this sanctuary,
                                    "NaattuLife" takes root, and from its nurturing embrace, emerges a plenty of products
                                    designed with a singular purpose - to illuminate the path to a healthier life. <br /><br />

                                    With a dedication to the unadulterated and the authentic, it offers the bounty of
                                    time-tested treasures, infused with the wisdom of generations. It is here, in "NaattuLife,"
                                    that the age-old promise of wellness and vitality finds a modern expression, beckoning all
                                    to embrace the heritage of their roots, and to partake in a life of abundant health.
                                </p>
                            </div>
                            <div className="category-item" style={{display:'none'}}>
                                <div className="category-icon">
                                    <img src='/images/category/bj.jpg' alt="HALO" />
                                </div>
                                <div className="category-content" >
                                    <h2><Link onClick={ClickHandler} href="/shop">Queen Bee Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div> 
                            <div className="category-item" style={{display:'none'}}>
                                <div className="category-icon">
                                    <img src='/images/category/icon-2.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Sunflower Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="category-img">
                            <img src='https://rubyautodealer.in/assets/img/new/ghee.png' alt="NJN" />
                            <div className="ct-img"><img src='/images/category/icon-4.png' alt="NEEE" /></div>
                        </div>
                    </div>
                    <div  style={{display:'none'}}>
                        <div className='col-6'>
                            <div>  <h4>Our Mission</h4></div>
                            <div>
                                <ul>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        High-quality work
                                    </li>

                                    <li>
                                        Straightforward pricing</li>
                                    <li>
                                        Rapid response times</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;