import React from 'react';
import Scrollbar from '../../components/scrollbar'
import Navbar from "../../components/Navbar";
import PageTitle from '../../components/pagetitle';
import Footer from "../../components/footer";
import TermsPage from '../../components/TermsPage/terms';



const Terms = (props) => {
    return (
        <>
            <Navbar />
            <PageTitle  pageTitle={'Terms and Conditions'} pagesub={'Terms and Conditions'}/>
            <TermsPage/>
            <Footer />
            <Scrollbar />
        </>
    )
}
export default Terms; 