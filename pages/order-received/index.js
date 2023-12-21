import React, { Fragment } from 'react';
import { connect } from "react-redux";
import OrderRecivedSec from '../../components/OrderRecivedSec';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import PageTitle from '../../components/pagetitle';


const OrderRecived = ({ cartList }) => {


    return (
        <Fragment>
            <Navbar/>
            <OrderRecivedSec cartList={cartList} />
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(OrderRecived);