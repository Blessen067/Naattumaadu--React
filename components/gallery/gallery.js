import React from "react";
import Link from "next/link";

const GalleryPage = (props) => {
  console.log("ima", props.images);
  return (
    <>
      <section className="about-section  ">
        <div className="container">
          <div className="row align-items-center" >
            {props.images &&
              props.images?.map((item, index) => (
                <div className="col col-lg-6 col-12">
                  <img src={item.image} alt={`Image 1 - ${index}`} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;


