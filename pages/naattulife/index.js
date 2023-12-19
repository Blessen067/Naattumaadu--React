import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import PageTitle from '../../components/pagetitle'
import Scrollbar from "../../components/scrollbar";
import NaattuPage from "../../components/Naattu";

const Nattu =()=>{
    return(
        <>
      <Navbar/>
       
        <PageTitle pageTitle={' NAATTULIFE'} pagesub={' NAATTULIFE'} pageImage/> 
         <NaattuPage/>
        <Footer/>     
        <Scrollbar/>

        </>
    )
}
export default Nattu;