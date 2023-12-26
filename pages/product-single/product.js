import React, { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'
const Product = ({ item, addToCart }) => {
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null); // New state for selected size
  const [totalPrices, setTotalPrices] = useState(item.price);
  
  const calculateTotalPrice = () => {
    const basePrice = item.price;
    const totalPrices = basePrice * qty;
    setTotalPrices(totalPrices);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [qty, item.price]);

  // Function to handle size selection
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    // Calculate total price based on the selected size and quantity
    const totalPrices = size.price * qty;
    setTotalPrices(totalPrices);
  };

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
                {item && item.size.map((size, index) => (
                  <React.Fragment key={index}>
                    <ul>
                      <li className="color">
                        <input
                          id={`wa${index + 1}`}
                          type="radio"
                          name="size"
                          value={size.weight}
                          checked={selectedSize === size} // Check if the size is selected
                          onChange={() => handleSizeChange(size)} // Handle size change
                        />
                        <label htmlFor={`wa${index + 1}`}>{size.weight}</label>
                      </li>
                    </ul>
                  </React.Fragment>
                ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
