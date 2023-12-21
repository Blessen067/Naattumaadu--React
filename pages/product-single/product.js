import React, { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'

const Product = ({ item, addToCart }) => {
 
  const [qty, setQty] = useState(1);
  const [totalPrices, setTotalPrices] = useState(item.price);

  const calculateTotalPrice = () => {
    const basePrice = item.price;
    const totalPrices = basePrice * qty;
    setTotalPrices(totalPrices);
    console.log(totalPrices);

  };

  useEffect(() => {
    calculateTotalPrice();
  }, [qty, item.price]);
  return (

    <div className="product-details">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="product-single-img">
            <div className="product-active">
              <div className="item">
                <Zoom>
                  <img
                    alt="Ghee in Single Product view"
                    src={item.image}
                    // src="https://media.istockphoto.com/id/878155310/photo/desi-pure-ghee-or-clarified-butter-in-glass-or-copper-container-with-spoon-selective-focus.jpg?s=612x612&w=0&k=20&c=gpImYns7p8sfNWt39597A2_SNv0xQAC2SfyYBGwDnv4="

                    width="500"
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="product-single-content">
            <h5>{item.name}</h5>
            <h6>₹{totalPrices}</h6>
            <ul className="rating">
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
            <p>{item.description}</p>

            <div className="product-filter-item color filter-size">
              <div className="color-name">
                <span>Weight :</span>
                <ul>
                  <li className="color">
                    <input id="wa1" type="radio" name="size" value="30" />
                    <label htmlFor="wa1">2L</label>
                  </li>
                  <li className="color">
                    <input id="wa2" type="radio" name="size" value="30" />
                    <label htmlFor="wa2">1L</label>
                  </li>
                  <li className="color">
                    <input id="wa3" type="radio" name="size" value="30" />
                    <label htmlFor="wa3">500ML</label>
                  </li>
                  <li className="color">
                    <input id="wa4" type="radio" name="size" value="30" />
                    <label htmlFor="wa4">200ML</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pro-single-btn">
              <Grid className="quantity cart-plus-minus">
                <Button
                  className="dec qtybutton"
                  onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                >
                  -
                </Button>
                <input
                  value={qty}
                  onChange={(e) => setQty(parseInt(e.target.value) || 1)}
                  type="text"
                />
                <Button
                  className="inc qtybutton"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </Button>
              </Grid>
              <button
                className="theme-btn"
                onClick={() => addToCart(item, qty, calculateTotalPrice())}
              >
                Add to cart
              </button>
            </div>
            <div className="social-share">
              <span>Share with : </span>
              <ul className="socialLinks">
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/login">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/i/flow/login">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/accounts/login/">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@user-nn3np1nc2l">
                    <i className="fa fa-youtube-play"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
