import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";

import styles from "../../styles/hero2.module.css";
import { heroImageAPI } from "../../utils/api";

const Hero2 = () => {
  const [heroImages, setHeroImage] = useState("");

  const heroImage = async () => {
    const data = await heroImageAPI();
    setHeroImage(data.image_path);
  };

  useEffect(() => {
    heroImage();
  }, []);

  return (
    <section
      className="hero hero-style-2"
      style={{
        width: "100%", // Set the section width to 100%
        overflow: "hidden",
      }}
    >
      <div className="hero-slider">
        <div className="slide">
          <div
            className={`slide-inner `}
            style={{
              backgroundImage: `url(${heroImages})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // Use 'cover' to make the background image cover the entire container
              marginBottom: "50px",
              backgroundPosition: 'center',

            }}
          >
            <div className="container">
              <div className="row">
                <div className="slide-caption">
                  <div className="slide-title mb-3">
                    <img
                      src="Images/fresh.png"
                      className={styles.imgMob}
                      alt="fresh"
                      height={"200px"}
                      width={"250px"}
                    />
                  </div>
                  <div className={`btns ${styles.button}`} style={{ marginBottom: "10px", marginLeft:"42px" }}>
                    <Link href="/shop" className={`btn theme-btn ${styles.shop_now_link}`} style={{width:"211px"}}>
                      Shop Now 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
