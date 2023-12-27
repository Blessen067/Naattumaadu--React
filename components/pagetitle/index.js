import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { breadCrumbs } from "../../utils/api";

const PageTitle = (props) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  const bgImage = async () => {
    const data = await breadCrumbs();
    setBackgroundImage(data.image_path);
  };

  useEffect(() => {
    bgImage();
  }, []); 

  const backgroundStyle = {
    background: `url(${backgroundImage}) no-repeat center center / cover`,
  };

  return (
    <div className="tp-breadcumb-area" style={backgroundStyle}>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-breadcumb-wrap">
              <h2>{props.pageTitle}</h2>
              <ul>
                <li>
                  <Link href="/home2">Home</Link>
                </li>
                <li>
                  <span>{props.pagesub}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hero-shape-img-1"><img src='/images/slider/img-2.png' alt=""/></div>
            <div className="hero-shape-img-2"><img src='/images/slider/img-3.png' alt=""/></div> */}
    </div>
  );
};

export default PageTitle;
