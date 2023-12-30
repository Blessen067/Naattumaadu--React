import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import FilterSidebar from "../../components/FilterSidebar";
import FilterAllProduct from "../../components/FilterAllProduct";
import { connect } from "react-redux";
import api from "../../api";
import { addToCart, addToWishList } from "../../store/actions/action";
import Scrollbar from "../../components/scrollbar";
import { fetchProductData } from "../../utils/api";

const ShopPage = ({ addToCart, addToWishList }) => {
  // const productsArray = api();

  const [filter, setFilter] = useState({
    price: "",
    size: "",
    color: "",
    brand: "",
  });

  const priceChangeHandler = ({ target: { name, value } }) => {
    console.log("fi", value);
    const val = typeof value === "string" ? JSON.parse(value) : value;
    setFilter({ ...filter, [name]: val });
  };

  const changeHandler = ({ target: { name, value } }) => {
    setFilter({ ...filter, [name]: value });
  };

  const priceFIlter = (price) => {
    if (filter.price === "") {
      return true;
    } else if (filter.price.max && filter.price.min) {
      console.log("90", price);
      return price <= filter.price.max && price >= filter.price.min;
    } else if (filter.price.min) {
      return price >= filter.price.min;
    } else if (filter.price.max) {
      return price <= filter.price.min;
    } else {
      return false;
    }
  };

  const addToCartProduct = (product) => {
    addToCart(product, 1, filter.color, filter.size);
  };

  const addToWishListProduct = (products) => {
    addToWishList(products);
  };

  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    try {
      fetchProductData()
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error setting products:", error));
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const fil = products
    .filter((el) => priceFIlter(el.price))
    .filter((el) => (filter.size ? el.size === filter.size : true))
    .filter((el) => (filter.color ? el.color === filter.color : true))
    .filter((el) => (filter.brand ? el.brand === filter.brand : true));
  console.log("DD", fil);

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"HERITAGE & PROVISIONS"} pagesub={"HERITAGE & PROVISIONS"} />
      <div className="shop-section">
        <div className="container">
          <div className="row">
            <FilterSidebar
              filter={filter}
              priceChangeHandler={priceChangeHandler}
              changeHandler={changeHandler}
            />
            <FilterAllProduct
              addToCartProduct={addToCartProduct}
              addToWishListProduct={addToWishListProduct}
              products={fil}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart, addToWishList })(ShopPage);
