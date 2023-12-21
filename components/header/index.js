import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import { totalPrice } from "../../utils";
import MobileMenu from "../MobileMenu";
import { removeFromCart, removeFromWishList } from "../../store/actions/action";

class Header extends Component {
  state = {
    isCartShow: false,
    isWishlistShow: false,
    isprofileShow: false,
  };

  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow,
    });
  };

  wishlistHandler = () => {
    this.setState({
      isWishlistShow: !this.state.isWishlistShow,
    });
  };

  profileHandler = () => {
    this.setState({
      isprofileShow: !this.state.isprofileShow,
    });
  };

  render() {
    const { isCartShow, isWishlistShow, isprofileShow } = this.state;

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    const { carts, wishs } = this.props;
    const isLoggedIn = !!localStorage.getItem("token");

    let totalwishlistprice = 0;
    if (wishs && wishs.length > 0) {
      for (let i = 1; i <= wishs.length; i++) {
        totalwishlistprice += Number(wishs[i - 1].price);
      }
    }

    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login "); // Redirect to the home page after logout
    };

    return (
      <header id="header" className={`site-header ${this.props.hClass}`}>
        <nav className="navigation navbar navbar-expand-lg">
          <div className="">
            <div className="row">
              <div className="col-lg-2 col-sm-0 ms-0">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} href="/" className="navbar-brand ms-2">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src='/images/milk/cowlogo.png' style={{ width: '60px' }} alt="icon" />
                      <h2 style={{ marginLeft: '0px', marginBottom: '0' }}>NaattuMaadu</h2>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 d-flex " style={{ marginLeft: "130px" }}>
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <ul className="nav navbar-nav me-auto mb-2 ms-3 mb-lg-0" style={{ display: 'flex', alignItems: 'center' }}>
                    <li>
                      <Link onClick={ClickHandler} className="" href="/">
                        NAATTULIFE
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/about"> TASTE & TRADITION</Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/shop"> Shop</Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/gallery">VISUAL</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/contact"> QUILL</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 " style={{ marginlef: '50px' }}>
                <div className="header-right d-flex">
                  <div className="header-profile-form-wrapper">
                    <button
                      onClick={this.profileHandler}
                      className="profile-toggle-btn"
                    >
                      <i className={`${isprofileShow ? 'fi ti-close' : 'fi flaticon-user'}`}></i>
                    </button>
                    <div
                      className={`header-profile-content ${isprofileShow ? "header-profile-content-toggle" : ""}`} >
                      <ul>
                        {!isLoggedIn && (
                          <>
                            <li>
                              <Link onClick={ClickHandler} href="/login">Login</Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} href="/register">Register</Link>
                            </li>
                          </>
                        )}
                        {isLoggedIn && (
                          <li>
                            <Link onClick={handleLogout} href="/login">Logout</Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="mini-cart">
                    <button
                      onClick={this.cartHandler}
                      className="cart-toggle-btn"
                    >
                      {" "}
                      <i className="fi flaticon-bag"></i>{" "}
                      <span className="cart-count">{carts.length}</span>
                    </button>
                    <div
                      className={`mini-cart-content ${isCartShow ? "mini-cart-content-toggle" : ""
                        }`}
                    >
                      <button
                        onClick={this.cartHandler}
                        className="mini-cart-close"
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((cart, i) => (
                            <div className="mini-cart-item clearfix" key={i}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={cart.image} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{cart.name} </p>
                                <span className="mini-cart-item-price">
                                ₹{cart.price} x {" "} {cart.qty}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      this.props.removeFromCart(cart.id)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Total: ₹{totalPrice(carts)}
                        </span>
                        <div className="mini-btn">
                          <Link onClick={ClickHandler} href="/checkout" className="view-cart-btn s1">
                            Checkout
                          </Link>
                          <Link onClick={ClickHandler} href="/cart" className="view-cart-btn">
                            View Cart
                          </Link>
                        </div>
                      </div>
                      <div className="visible-icon">
                        <img src='/images/shop/mini-cart/bee2.png' alt="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="header-wishlist-form-wrapper">
                    <button
                      onClick={this.wishlistHandler}
                      className="wishlist-toggle-btn"
                    >
                      <i className="fi flaticon-heart"></i>{" "}
                      <span className="cart-count">{wishs.length}</span>{" "}
                    </button>
                    <div
                      className={`mini-wislist-content ${isWishlistShow ? "mini-cart-content-toggle" : ""
                        }`}
                    >
                      <button
                        onClick={this.wishlistHandler}
                        className="mini-cart-close"
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                        {wishs &&
                          wishs.length > 0 &&
                          wishs.map((wish, i) => (
                            <div className="mini-cart-item clearfix" key={i}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={wish.image} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{wish.name} </p>
                                <span className="mini-cart-item-price">
                                ₹{wish.price}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      this.props.removeFromWishList(wish.id)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Total: ₹{totalwishlistprice}
                        </span>
                        <div className="mini-btn">
                          <Link onClick={ClickHandler} href="/checkout" className="view-cart-btn s1">
                            Checkout
                          </Link>
                          <Link onClick={ClickHandler} href="/wishlist" className="view-cart-btn">
                            View Wishlist
                          </Link>
                        </div>
                      </div>
                      <div className="visible-icon">
                        <img src='/images/shop/mini-cart/bee2.png' alt="icon" />
                      </div>
                    </div>
                  </div>
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
    wishs: state.wishList.w_list,
  };
};

export default connect(mapStateToProps, { removeFromCart, removeFromWishList })(Header);
