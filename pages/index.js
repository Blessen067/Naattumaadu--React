import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/index';
import Scrollbar from '../components/scrollbar';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../store/actions/action";
import { fetchProductData } from "../utils/api";
import { myorder } from "../utils/api";
import axios from 'axios';
import Hero2 from '../components/hero2';
import Category2 from '../components/Category2';
import About from '../components/about';
import Product from '../components/Product/Product';
import Footer from '../components/footer';
import OfferSection from '../components/OfferSection';
import FlashSale from '../components/FlashSale';
import Project from '../components/ProjectSection';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';
import Client from "../components/Client";
import BlogSection from '../components/BlogSection';

const HomePage2 = (props) => {
    const addToCartProduct = (product, qty = 1) => {
        props.addToCart(product, qty);
    };

    const addToWishListProduct = (product, qty = 1) => {
        props.addToWishList(product, qty);
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


    }
    useEffect(() => {

        fetchProduct()
    }, []);

    console.log("DD",products)
// const [orders, setOrders] = useState([]);
//     const my_order = async () => {
//         try {
//           myorder(user_id, session_id)
//             .then((data) => setOrders(data))
//             .catch((error) => console.error("Error setting products:", error));
//         } catch (error) {
//           console.log("Error: ", error);
      
//         }
      
//       }
//       useEffect(() => {
//         my_order()
//       }, []);
    return (
        <div>
            <Navbar />
            <Hero2 />
            <Category2 />
            <About />
            <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <OfferSection  products={products}/>
            <FlashSale
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <Project />
            <Service />
            <Testimonial />
            <Client />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </div>
    );
};

export default connect(null, { addToCart, addToWishList })(HomePage2);
