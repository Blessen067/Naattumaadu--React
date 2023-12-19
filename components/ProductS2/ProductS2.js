import React from "react";
import  Link  from "next/link";


const ProductS2 = ({ products, addToCartProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-product-section-s2 section-padding">
      <div className="container-fluid">
        <div className="wpo-product-wrap">
          <div className="row">
            {products.length > 0 &&
              products.slice(9, 14).map((product, pitem) => (
                <div className="grid" key={pitem}>
                  <div className="wpo-product-item">
                    <div className="wpo-product-img">
                      <img src={product.proImg} alt="" />
                      <button
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        onClick={() => addToCartProduct(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                    <div className="wpo-product-text">
                      <h3><Link onClick={ClickHandler} href='/product-single/[slug]' as={`/product-single/${product.slug}`}>{product.title}</Link></h3>
                      <span>${product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductS2;
