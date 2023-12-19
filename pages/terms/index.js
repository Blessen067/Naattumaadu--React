import React from 'react';
import Scrollbar from '../../components/scrollbar'
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import TermsPage from '../../components/TermsPage/terms';



const Terms = (props) => {
    return (
        <>
            <Navbar />
            <TermsPage/>
            <Footer />
            <Scrollbar />
        </>
    )
}
export default Terms; 