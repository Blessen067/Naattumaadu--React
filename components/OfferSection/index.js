import React from 'react'
import Link from 'next/link'

const OfferSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="offer-area section-padding" style={{marginBottom:'0px'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="offer-mg">
                           <img src='/images/milk/ghee-bg.png' alt="" style={{width:'300px',marginLeft:"100px"}}/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="offer-wrap">
                            <div className="offer-title">
                                <small>Limited Offer For Customer</small>
                                <h2>Pure Ghee <span></span> <br/></h2>
                            </div>
                            <p>Ghee is clarified butterfat and contains about 99% of milk fat.
                                 Ghee from buffalo milk has no colour, unlike ghee from cattle,
                                  which is golden yellow due to the presence of carotenoids as stated earlier.
                                   Ghee is the only source of animal fat in the vegetarian diet of the human population in India.</p>
                            <Link onClick={ClickHandler} href="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferSection;