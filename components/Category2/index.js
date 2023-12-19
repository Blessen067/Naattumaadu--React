import React from 'react'
import Link from 'next/link'


const Category2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={`category-area-s2 section-padding ${props.StyleClass}`}  style={{display:'none'}}>
            {/* <div className="container">
                <div className="category-wrap">
                    <div className="row">

                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img
                                        src='/images/slider/g-bg.png'
                                        alt=""
                                        style={{
                                            marginBottom: '10px',
                                            width: '100%', // Adjust the width as needed
                                            height: '100%', // Maintain aspect ratio
                                        }}
                                    />
                                </div>

                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">GHEE</Link></h2>
                                    <p>₹30.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='https://rubyautodealer.in/public/storage/images/6IkQqGtMLra5xtLDU8bv.jpg' alt="" height={'140px'} />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">CHOCOLATE</Link></h2>
                                    <p>₹50.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='https://rubyautodealer.in/public/storage/images/CGKis65Jlefgs1dAsP2B.jpg' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">A2-DESI GHEE</Link></h2>
                                    <p>₹200.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Category2;