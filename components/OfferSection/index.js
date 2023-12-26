import React, { useState } from "react";
import Link from "next/link";

const OfferSection = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const featureProduct = props.products?.filter(item => item.featured === 1)

  console.log("featureProduct",featureProduct)
  return (
    <section
      className="offer-area section-padding"
      style={{ marginBottom: "0px" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="offer-mg">
              <img
                src={featureProduct[0]?.image}
                alt=""
                style={{ width: "300px", marginLeft: "100px" }}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="offer-wrap">
              <div className="offer-title">
                <small>Featured Product</small>
                <h2>
                {featureProduct[0]?.name} <span></span> <br />
                </h2>
              </div>
              <p>
              {featureProduct[0]?.description}
              </p>
              <Link
                href='/product-single/[slug]' as={`/product-single/${featureProduct[0]?.id}`}
                className="btn theme-btn"
              >
                Buy Now <i className="fa fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
