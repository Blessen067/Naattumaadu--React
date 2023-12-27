import React from "react";
import Link from "next/link";
import DefaultModal from "../Modal";

const Product = ({ products, addToCartProduct, addToWishListProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="product-area section-padding pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title">
              <h2>
                Heritage <span>&</span>  Provisions
              </h2>
              <p style={{textAlign:"justify"}}>
                Ghee is clarified butterfat and contains about 99% of milk fat.
                Ghee from buffalo milk has no colour, unlike ghee from cattle,
                which is golden yellow due to the presence of carotenoids as
                stated earlier. Ghee is the only source of animal fat in the
                vegetarian diet of the human population in India.
              </p>
            </div>
          </div>
        </div>

        <div className="product-wrap">
          <div className="row">
            {products.length > 0 &&
              products.map((product, pitem) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3"
                  key={pitem}
                >
                  <div className="product-item">
                    <Link
                      href="product-single/[slug]"
                      as={`product-single/${product.id}`}
                    >
                      <div className="product-img">
                        <img
                          src={product.image}
                          // src="https://media.istockphoto.com/id/878155310/photo/desi-pure-ghee-or-clarified-butter-in-glass-or-copper-container-with-spoon-selective-focus.jpg?s=612x612&w=0&k=20&c=gpImYns7p8sfNWt39597A2_SNv0xQAC2SfyYBGwDnv4="

                          alt=""
                        />
                      </div>
                      <div className="product-content ">
                        <h3 className="d-flex justify-content-center">
                          {product.name}
                        </h3>
                        <div className="product-btm d-flex justify-content-center">
                          <p style={{ color: "orange", fontWeight: "bold" }}>
                            ₹ {product.price}
                          </p>
                        </div>

                        <div className="mt-2 d-flex justify-content-center">
                          <Link
                            href="product-single/[slug]"
                            as={`product-single/${product.id}`}
                            className="btn theme-btn"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
