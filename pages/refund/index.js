import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import RefundPage from "../../components/Refund";
import PageTitle from "../../components/pagetitle";

const Refund =(props)=>{
    return(
   <>
        <Navbar/>
        <PageTitle pageTitle={' Refund - Policy'} pagesub={' REFUND POLICY'}/>
        <RefundPage/>
        <Footer/>
        <Scrollbar/>

   </>
    )
}
export default Refund;