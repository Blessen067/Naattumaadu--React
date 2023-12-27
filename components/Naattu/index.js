import React from "react";
import Link
    from "next/link";
const NaattuPage = (props) => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row align-items-center ">
                    <div className="col-lg-7">
                        <p>what we provide</p>
                        <h1>GHEE</h1><br></br>
                        <p style={{textAlign:"justify"}}>Beneath the Indian sun, milk from sacred indigenous cows is
                            gently heated, coaxing cream to separate and fill aged cans.
                            A touch of curd from native cow's milk joins the mix.
                            Sunlight bathes the cream, and room temperature nurtures
                            it to sourness. Chilled storage at 4°C follows. After a day's
                            embrace, the cream is transformed into butter. In a
                            copper-bottomed pot over firewood, under the sun's direct gaze,
                            the butter sizzles and dances, revealing the ancient
                            alchemy of ghee-making—a symphony of tradition and nature,
                            a partnership with the sun, creating liquid gold.</p>

                        <div>
                        <Link  href="/contact" className="btn theme-btn">
                                                Contact Us<i className="fa fa-angle-double-right"></i>
                                            </Link>
                        </div>

                    </div>
                    <div className="col-lg-5 ">
                        <div >
                            <img src="https://twobrothersindiashop.com/cdn/shop/articles/Untitled_design_3.png?v=1682432998&width=1300" />
                        </div>
                    </div>
                </div><hr />

                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className=" ">
                            <div >
                                <img src="https://rubyautodealer.in/assets/img/about/aboutus-ghee.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <p>NAATTUMAADU</p>
                        <h1>A2 GHEE BENEFITS & NUTRITION FACTS</h1><br />
                        <p style={{textAlign:"justify"}}>A2 Cow Ghee has essential macro and micronutrients that fulfill the
                            daily dietary requirements of the body. It is a rich source of antioxidants
                            and vital vitamins like Vit B2, B12, B6, C, E, and K, Omega-3 and Omega-6 fatty
                            acids, and healthy amino acids.
                        </p><br /><br />

                        <li>Nourishes the body</li>
                        <li>Enhances digestion & absorption</li>
                        <li>Increases immunity (ojas)</li>
                        <li>Good for the heart</li>
                        <li>Improves brain function</li>
                        <li>Bone health</li>
                        <li>Vital nutrition for kids</li>
                        <li>Heals & moisturizes the skin</li>
                        <li>Healthy substitute for cooking oil</li><br />

                        <p>In addition to A2 Cow Ghee, we also offer the following products:</p>

                        <li>Butter</li>
                        <li>Fertilizers</li>
                        <li>Cow Dung</li>
                        <li>Pooja Products – Vibuthi, Doop sticks, etc.</li><br/>

                        <div>
                        <Link  href="/contact" className="btn theme-btn">
                                                Contact Us<i className="fa fa-angle-double-right"></i>
                                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default NaattuPage;