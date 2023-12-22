import React, { Fragment } from 'react';
import { Button, Grid } from "@mui/material";
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import Link from "next/link";
import {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} from "../../store/actions/action";
import Scrollbar from '../../components/scrollbar';

const submitHandler = (e) => {
    e.preventDefault()
}


const CartPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const { carts } = props;

    console.log('cartss', carts)

    return (
        <>
            <Fragment>
                <Navbar />
                <PageTitle pageTitle='Cart' pagesub="Cart" />
                <div className="cart-area section-padding">
                    <div className="container">
                        <div className="form">
                            <div className="cart-wrapper">
                                <div className="row">
                                    <div className="col-12">
                                        <form action="cart">
                                            <table className="table-responsive cart-wrap">
                                                <thead>
                                                    <tr>
                                                        <th className="images images-b">Image</th>
                                                        <th className="product-2">Product Name</th>
                                                        <th className="pr">Quantity</th>
                                                        <th className="ptice">Price</th>
                                                        <th className="stock">Total Price</th>
                                                        <th className="remove remove-b">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {carts.length > 0 &&
                                                        carts.map((item, crt) => (

                                                            <tr key={crt}>
                                                                <td className="images">
                                                                    <img src={item.image} alt="hi" />
                                                                </td>
                                                                <td className="product">
                                                                    <ul>
                                                                        <li className="first-cart">
                                                                            {item.name}
                                                                        </li>
                                                                        {/* <li>Brand: {item.brand}</li>
                                                                        <li>Size: {item.size}</li> */}
                                                                    </ul>
                                                                </td>
                                                                <td className="stock">
                                                                    <div className="pro-single-btn">
                                                                        <Grid className="quantity cart-plus-minus">
                                                                            <Button
                                                                                className="dec qtybutton"
                                                                                onClick={() =>
                                                                                    props.decrementQuantity(item.id)
                                                                                }
                                                                            >
                                                                                -
                                                                            </Button>
                                                                            <input value={item.qty} type="text" />
                                                                            <Button
                                                                                className="inc qtybutton"
                                                                                onClick={() =>
                                                                                    props.incrementQuantity(item.id)
                                                                                }
                                                                            >
                                                                                +
                                                                            </Button>
                                                                        </Grid>
                                                                    </div>
                                                                </td>
                                                                <td className="price">₹{item.qty * item.price}</td>
                                                                <td className="stock">₹{item.qty * item.price}</td>
                                                                <td className="action">
                                                                    <ul>
                                                                        <li
                                                                            onClick={() =>
                                                                                props.removeFromCart(item.id)
                                                                            }
                                                                        >
                                                                            <i className="fi ti-trash"></i>
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </tbody>
                                            </table>
                                        </form>
                                        <div className="submit-btn-area">
                                            <ul>
                                                <li>
                                                    <Link
                                                        onClick={ClickHandler}
                                                        href="/shop"
                                                        className="theme-btn"
                                                    >
                                                        Continue Shopping{" "}
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <button type="submit">Update Cart</button>
                                                </li> */}
                                            </ul>
                                        </div>
                                        <div className="cart-product-list">
                                            <ul>
                                                <li>
                                                    Total product<span>( {carts.length} )</span>
                                                </li>
                                                <li>
                                                    Sub Price<span>₹{totalPrice(carts)}</span>
                                                </li>
                                                <li>
                                                    Vat<span>₹0</span>
                                                </li>
                                                <li>
                                                    Eco Tax<span>₹0</span>
                                                </li>
                                                <li>
                                                    Delivery Charge<span>₹0</span>
                                                </li>
                                                <li className="cart-b">
                                                    Total Price<span>₹{totalPrice(carts)}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="submit-btn-area">
                                            <ul>
                                                <li>
                                                    <Link
                                                        onClick={ClickHandler}
                                                        href="/checkout"
                                                        className="theme-btn"
                                                    >
                                                        Proceed to Checkout{" "}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <Scrollbar />
            </Fragment>
        </>
    )
};


const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
})(CartPage);

