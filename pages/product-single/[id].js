import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import Product from "./product";
import api from "../../api";
import { useRouter } from "next/router";
import PageTitle from "../../components/pagetitle";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import ProductTabs from "./alltab";
import Scrollbar from "../../components/scrollbar";
import { fetchProductData, productByID } from "../../utils/api";

const ProductSinglePage = (props) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState(null);
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productByID(id);
        setProduct(response);
        // setTotalPrice(Number(response.data.price));
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const addToCartProduct = (product, qty = 1, price) => {
    console.log("from cart", price);
    addToCart(product, qty, price);
  };

  const { addToCart } = props;
  const item = product && product;

  console.log("item", item);

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Product Detail"} pagesub={"Product Detail"} />
      <section className="product-single-section section-padding">
        <div className="container">
          {item ? <Product item={item} addToCart={addToCartProduct} /> : null}
          {/* <ProductTabs/> */}
        </div>
      </section>
      <Scrollbar />
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
