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
                100% PURE <span>GHEE</span>
              </h2>
              <p>
                Ghee is clarified butterfat and contains about 99% of milk fat.
                Ghee from buffalo milk has no colour, unlike ghee from cattle,
                which is golden yellow due to the presence of carotenoids as stated earlier.
                Ghee is the only source of animal fat in the vegetarian
                diet of the human population in India.
              </p>
            </div>
          </div>
        </div>


        <div className="product-wrap">
          <div className="row align-items-center">
            {products.length > 0 &&
              products.map((product, pitem) => (
                <Link href={`/product-single/${product.id}`} >
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                    key={pitem}
                  >
                    <div className="product-item">
                      <div className="product-img">
                        <img src={product.proImg} alt="" />
                        <ul>
                          <li>
                            <button
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Add to Cart"
                              onClick={() => addToCartProduct(product)}
                            >
                              <i className="fi flaticon-shopping-cart"></i>
                            </button>
                          </li>
                          <li>
                            {/* <DefaultModal /> */}
                          </li>
                          <li>
                            <button
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Add to Cart"
                              onClick={() => addToWishListProduct(product)}
                            >
                              <i className="fi flaticon-like"></i>
                            </button>
                          </li>
                        </ul>
                        {/* <div className="offer-thumb">
                    <span>{product.offer}</span>
                  </div> */}
                      </div>
                      <div className="product-content">
                        <h3 style={{marginLeft:"110px",fontSize:'30px'}}>
                          {product.name}
                        </h3>
                        <div className="product-btm">
                          <div className="product-price">
                            <ul style={{marginLeft:'130px',fontSize:'20px'}}>
                              <li >₹ {product.price}</li>
                              <li></li>
                            </ul>
                          </div>

                          {/* <div className="product-ratting">
                            <ul>
                              <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                              </li>
                            </ul>
                          </div> */}
                        </div>
                        <div className="mt-2" style={{ marginLeft: "70px" }}>
                          <Link onClick={ClickHandler} href="/shop" className="btn theme-btn ms-4  ">
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div >
      </div >
    </section >
  );
};

export default Product;
