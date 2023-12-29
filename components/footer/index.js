import React from "react";
import Link from "next/link";

const Footer = (props) => {
  const { social } = props;

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="tp-site-footer">
      <div className="tp-upper-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <h3 style={{ color: "white", textTransform: "uppercase" }}>
                  Taste and tradition{" "}
                </h3>
                <p style={{ textAlign: "justify" }}>
                  In the ancient folds of Tamil, emerges "Naattu" — more than
                  words, it's the essence of native spirit, indigenous pride,
                  and timeless tradition. A linguistic sanctuary where
                  time-honored wisdom echoes, celebrating the primal "aadhi"
                  with unwavering reverence.
                </p>
                <ul>
                  <li>
                  {social?.facebook && (
                    <Link onClick={ClickHandler} href={social.facebook}>
                      <i className="ti-facebook"></i>
                    </Link>
                  )}
                  </li>
                  <li>
                  {social?.twitter && (
                    <Link
                      onClick={ClickHandler}
                      href={social.twitter}
                    >
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  )}
                  </li>
                  <li>
                  {social?.instagram && (
                    <Link
                      onClick={ClickHandler}
                      href={social?.instagram}
                    >
                      <i className="ti-instagram"></i>
                    </Link>
                  )}
                  </li>
                  <li>
                  {social?.google && (
                    <Link
                      onClick={ClickHandler}
                      href={social?.google}
                    >
                      <i className="ti-google"></i>
                    </Link>
                  )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12 ">
              <div className=" link-widget">
                <div className="">
                  <h3 style={{ color: "white", textTransform: "uppercase" }}>
                    Support{" "}
                  </h3>
                </div>

                <ul className="">
                  <li>
                    <Link href="terms">Terms and conditions</Link>
                  </li>
                  <li>
                    <Link href="refund">Refund Policy</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="contact">Contact Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="shop">Shipping</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/naattulife">NaattuLife</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className=" link-widget">
                <div className="me-4">
                  <h3 style={{ color: "white" }}>BUSINESS HOURS</h3>
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
                  <h3>Heritage & Provisions</h3>
                </div>
                <p style={{ textAlign: "justify" }}>
                  Under the Indian sun, sacred cow's milk transforms into ghee.
                  Cream, nurtured by sunlight, sours at room temperature, then
                  chills at 4°C. In a copper pot over firewood, the butter
                  sizzles and dances—an ancient alchemy, a symphony with the
                  sun, creating liquid gold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <Link href={"/"}>
                COPYRIGHT DESIGN BY ORANGE MEGA SOFTWARES - 2023{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div />
    </footer>
  );
};

export default Footer;
